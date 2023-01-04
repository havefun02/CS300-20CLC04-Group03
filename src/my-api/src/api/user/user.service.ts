import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Inject, Res } from '@nestjs/common/decorators';
import { UserFromApi } from './user.entity';
import { Order } from './order/order.entity';
import { DetailOrder } from './order/detailorder.entity';
import { Brand } from '../host/product/brand.entity';
import { HostService } from '../host/host.service';
import { forwardRef } from '@nestjs/common/utils';

@Injectable()
export class UserService {
  @InjectRepository(UserFromApi)
  private readonly repository: Repository<UserFromApi>;
  @InjectRepository(UserFromApi)
  private readonly repositoryOrder: Repository<Order>;
  @InjectRepository(DetailOrder)
  private readonly repositoryOrderDetail: Repository<DetailOrder>;
  @Inject(forwardRef(() => HostService))
  private readonly hostService: HostService;
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

  public async getMainPage(id_page: string): Promise<any> {
    return await this.hostService.getProductById(id_page);
  }
  public async getMainPageApply(id_page: string): Promise<any> {
    return await this.hostService.getProductByFilter(id_page);
  }
  public async getBrand(): Promise<any> {
    return await this.hostService.getBrand();
  }
  public async getCate(): Promise<any> {
    return await this.hostService.getCate();
  }
  public async getColor(): Promise<any> {
    return await this.hostService.getColor();
  }
  public async getSize(): Promise<any> {
    return await this.hostService.getSize();
  }
  public getbySex() {
    return;
  }
  public getbySaleOff() {
    return;
  }
  public async getUserbyToken(req: any) {
    let token = req;
    console.log(token);
    let res = await this.repository.findOne({ where: token });
    return res;
  }
  public async loginCustomer(body: any) {
    console.log(body);
    let email = body.email;
    let name = body.name;
    let newUser = new UserFromApi();
    const user = await this.repository.findOne({ where: { email: email } });
    if (!user) {
      newUser.email = email;
      newUser.name = name;
      newUser.token = body.token;
      await this.repository.save(newUser);
    }
    return body.token;
  }

  public async updateProfile(email: any, update: any): Promise<any> {
    let user = await this.repository.update(email, update);
    return user;
  }
}
