import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Inject, Res } from '@nestjs/common/decorators';
import { UserFromApi } from './user.entity';
import { Order } from './order/order.entity';
import { DetailOrder } from './order/detailorder.entity';

@Injectable()
export class UserService {
  @InjectRepository(UserFromApi)
  private readonly repository: Repository<UserFromApi>;
  @InjectRepository(UserFromApi)
  private readonly repositoryOrder: Repository<Order>;
  @InjectRepository(DetailOrder)
  private readonly repositoryOrderDetail: Repository<DetailOrder>;
  public setUser(body: any) {
    const user = new UserFromApi();
    return this.repository.save(user);
  }
  public async getUser(): Promise<UserFromApi[]> {
    return await this.repository.find();
  }
  public async getOrderHost(): Promise<any[]> {
    let data = await this.repositoryOrder.query(
      'select id_order,id_api,set_at,state,voucher from "order"',
    );

    let res = [];
    for (let e of data) {
      let id_api = e.id_api;
      let id_order = e.id_order;

      let user = await this.repository.query(
        `select email,address from user_from_api where user_from_api.id_api=${id_api}`,
      );
      let dataDetail = await this.repositoryOrderDetail.query(
        `select id as id_product,quantity,size,color,price,quantity*price total from detail_order where detail_order.id_order=${id_order}`,
      );
      let detail: string = '';
      let total: number = 0;
      for (let i of dataDetail) {
        let key = Object.keys(i);
        let value = Object.values(i);
        total += Number(value[key.length - 1]);
        for (let j = 0; j <= key.length - 2; j++) {
          detail += key[j] + ' ' + value[j] + ',';
        }
        detail += key[key.length - 2] + value[key.length - 2] + ';';
      }
      res.push(Object.assign({}, user[0], e, { total: total, detail: detail }));
    }
    return res;
  }

  public async getRevenue(y: number): Promise<any> {
    let tmp: number = Number(Object.values(y));
    let res = [];
    for (let i = 1; i <= 12; i++) {
      let orders;
      if (i === 12) {
        orders = await this.repositoryOrder.query(
          `select id_order,set_at,state,voucher from "order" where "order".state='completed' and ("order".set_at between '${tmp}-${12}-01 12:00:00' and '${tmp}-${12}-30 12:00:00')`,
        );
      } else {
        orders = await this.repositoryOrder.query(
          `select id_order,set_at,state,voucher from "order" where "order".state='completed' and ("order".set_at between '${tmp}-${i}-01 12:00:00' and '${tmp}-${
            i + 1
          }-01 12:00:00')`,
        );
      }
      console.log(orders);
      let sum = 0;

      for (let e of orders) {
        let id_order = e.id_order;
        let dataDetail = await this.repositoryOrderDetail.query(
          `select quantity*price total from detail_order where detail_order.id_order=${id_order}`,
        );
        for (let j of dataDetail) sum += j.total;
      }
      res.push(sum);
    }
    console.log(res);
    return res;
  }

  public getMainPage() {
    return;
  }
  public getCatebyId() {
    return;
  }
  public getbySex() {
    return;
  }
  public getbySaleOff() {
    return;
  }
}
