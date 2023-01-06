import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Inject, Res } from '@nestjs/common/decorators';
import { UserFromApi, Voucher } from './user.entity';
import { Order } from './order/order.entity';
import { DetailOrder } from './order/detailorder.entity';
import { Brand } from '../host/product/brand.entity';
import { HostService } from '../host/host.service';
import { forwardRef } from '@nestjs/common/utils';
import { Cart } from './order/cart.entity';
import shortid = require('shortid');
@Injectable()
export class UserService {
  @InjectRepository(UserFromApi)
  private readonly repository: Repository<UserFromApi>;
  @InjectRepository(Order)
  private readonly repositoryOrder: Repository<Order>;
  @InjectRepository(DetailOrder)
  private readonly repositoryOrderDetail: Repository<DetailOrder>;
  @InjectRepository(Cart)
  private readonly repositoryCart: Repository<Cart>;
  @InjectRepository(Voucher)
  private readonly repositoryVoucher: Repository<Voucher>;
  @Inject(forwardRef(() => HostService))
  private readonly hostService: HostService;

  public async getUser(): Promise<UserFromApi[]> {
    return await this.repository.find();
  }
  public async getOrderHost(): Promise<any[]> {
    let data = await this.repositoryOrder.query(
      'select id_order,id_api,set_at,state,id_voucher from "order"',
    );

    let res = [];
    for (let e of data) {
      let id_api = e.id_api;
      let id_order = e.id_order;
      let user = await this.repository.query(
        `select*from user_from_api where id_api='${id_api}'`,
      );
      console.log(user);
      if (user === null) continue;
      let dataDetail = await this.repositoryOrderDetail.query(
        `select  id_product,quantity,size,color,price,quantity*price total from detail_order where detail_order.id_order='${id_order}'`,
      );
      console.log(dataDetail);
      let detail: string = '';
      let total: number = 0;
      for (let i of dataDetail) {
        console.log(i);
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
    console.log(res);
    return res;
  }

  public async getRevenue(y: number): Promise<any> {
    let tmp: number = Number(Object.values(y));
    let res = [];
    for (let i = 1; i <= 12; i++) {
      let orders;
      if (i === 12) {
        orders = await this.repositoryOrder.query(
          `select id_order,set_at,state,id_voucher from "order" where "order".state='completed' and ("order".set_at between '${tmp}-${12}-01 12:00:00' and '${tmp}-${12}-30 12:00:00')`,
        );
      } else {
        orders = await this.repositoryOrder.query(
          `select id_order,set_at,state,id_voucher from "order" where "order".state='completed' and ("order".set_at between '${tmp}-${i}-01 12:00:00' and '${tmp}-${
            i + 1
          }-01 12:00:00')`,
        );
      }
      let sum = 0;

      for (let e of orders) {
        let id_order = e.id_order;
        let dataDetail = await this.repositoryOrderDetail.query(
          `select quantity*price total from detail_order where detail_order.id_order='${id_order}'`,
        );
        for (let j of dataDetail) sum += j.total;
      }
      res.push(sum);
    }
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
  public async getDetailProduct(id: string): Promise<any> {
    return await this.hostService.getDetailProductById(id);
  }

  public async getUserbyToken(req: any) {
    if (req === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = req.split(':');
    let res = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (res) return res;
    else throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
  }
  public async loginCustomer(body: any) {
    let email = body.email;
    let name = body.name;
    let newUser = new UserFromApi();
    let user = await this.repository.findOne({ where: { email: email } });
    if (!user) {
      newUser.id_api = shortid.generate();
      newUser.email = email;
      newUser.name = name;
      newUser.token = body.token;
      await this.repository.save(newUser);
    } else {
      let res = await this.repository.update(
        { email: email },
        { token: body.token },
      );
    }
    return { email: body.email, token: body.token };
  }

  public async updateProfile(email: any, update: any, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let res = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!res) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let user = await this.repository.update(email, update);
    return user;
  }

  public async getCart(id: number, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let res = await this.repositoryCart.query(
      `select p.id_product, p.name, p.price,c.size, c.color, c.quantity, c.id_item from product p, cart c where p.id_product = c.id_product and c.id_api = '${id}'`,
    );
    for (let i = 0; i < res.length; i++) {
      let property = await this.hostService.getDetailProductById(
        res[i].id_product,
      );
      res[i].size_list = property.size;
      res[i].color_list = property.color;
    }
    return res;
  }

  public async deleteCart(constr: any, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    return await this.repositoryCart.query(
      `delete from cart where id_item = '${constr.id_item}' and id_api = '${constr.id_api}'`,
    );
  }

  public async updateCart(
    id: any,
    id_item: any,
    body: any,
    auth: any,
  ): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let { size, color, quantity } = body;
    console.log(id_item);
    console.log(body);
    return await this.repositoryCart.query(
      `update cart set size='${size}',color='${color}',quantity='${quantity}' where cart.id_api='${id}' and cart.id_item='${id_item}'`,
    );
  }
  public async addToCart(id: any, body: any, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    console.log(body);
    let { size, color, quantity, id_product } = body;
    let item = new Cart();
    item.id_item = shortid.generate();
    item.color = color;
    item.quantity = quantity;
    item.size = size;
    item.id_api = id;
    item.id_product = id_product;
    console.log(item);
    return this.repositoryCart.save(item);
  }

  public async getVoucher(id: number, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    return await this.repositoryVoucher.query(
      `select v.id_voucher,vd.title, vd.discount, v.num,v.date from voucher_default vd, voucher v where vd.id_voucher = v.id_voucher and v.id_api = '${id}'`,
    );
  }

  public async getOrder(id: any, tab: any, auth: any): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let state = '';
    if (tab === '1') state = 'shipping';
    else if (tab === '2') state = 'completed';
    else if (tab === '3') state = 'cancel';
    let order;
    if (state === '')
      order = await this.repositoryOrder.find({
        where: { id_api: id },
      });
    else
      order = await this.repositoryOrder.find({
        where: { id_api: id, state: state },
      });
    console.log(order);
    let res = [];
    for (let e of order) {
      let check = await this.repositoryOrderDetail.findOne({
        where: { id_order: e.id_order },
      });
      console.log(e.id_order);
      if (!check) continue;
      let subRes = await this.repositoryOrderDetail.query(
        `select p.name,dp.quantity,dp.size,dp.color,dp.price from detail_order dp join product p on dp.id_product=p.id_product where dp.id_order='${e.id_order}'`,
      );
      console.log(subRes);
      let sum = 0;
      for (let e_ of subRes) {
        sum += e_.price;
      }
      res.push(Object.assign({}, e, { detail: subRes }, { sum: sum }));
    }
    return res;
  }
  public async removeOrder(
    id_api: any,
    id_order: any,
    auth: any,
  ): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let res = await this.repositoryOrder.update(
      { id_api: id_api, id_order: id_order.toString() },
      { state: 'cancel' },
    );

    return res;
  }

  public async BuyAgainOrder(
    id_api: any,
    id_order: any,
    auth: any,
  ): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let res = await this.repositoryOrder.update(
      { id_api: id_api, id_order: id_order.toString() },
      { state: 'shipping' },
    );

    return res;
  }

  public async buyProduct(
    id_user: any,
    list_id: any,
    body: any,
    auth: any,
  ): Promise<any> {
    if (auth === null) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    let arr = auth.split(':');
    let verif = await this.repository.findOne({
      where: { token: arr[0], email: arr[1] },
    });
    if (!verif) throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    let arr1 = list_id.split(',');
    let code = body.code;
    let newOrder = new Order();
    newOrder.id_api = id_user;
    newOrder.method = 'COD';
    newOrder.set_at = new Date();
    if (code) newOrder.id_voucher = code.id_voucher;
    newOrder.state = 'shipping';
    newOrder.id_order = shortid.generate();
    let resOrder = await this.repositoryOrder.save(newOrder);
    for (let e of arr1) {
      let product = await this.repositoryCart.query(
        `select*from cart join product on cart.id_product=product.id_product where cart.id_item='${e}'`,
      );
      let removeCart = await this.repositoryCart.delete({ id_item: e });
      let detail_order = new DetailOrder();
      detail_order.id_order = resOrder.id_order;
      detail_order.color = product[0].color;
      detail_order.id_product = product[0].id_product;
      detail_order.size = product[0].size;
      detail_order.price = product[0].price;
      detail_order.quantity = product[0].quantity;
      await this.repositoryOrderDetail.save(detail_order);
      await this.hostService.handleOrder(
        detail_order.id_product,
        detail_order.color,
        detail_order.size,
        detail_order.quantity,
      );
    }
    return 'ok';
  }
  public async setConfirm(id_orders: any) {
    console.log(id_orders);

    for (let e of id_orders) {
      let tmp = await this.repositoryOrder.query(
        `update "order" set state='completed' where id_order='${e}'`,
      );
    }
    return 'ok';
  }
}
