import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import e, { Request } from 'express';
import { User } from './host.entity';
import { Product, ProductDetail } from './product/product.entity';
import { Color } from './product/color.entity';
import { SizeTable } from './product/size.entity';
import { Brand } from './product/brand.entity';
import { Category } from './product/category.entity';
import { close } from 'fs';
import { UserService } from '../user/user.service';
import { forwardRef } from '@nestjs/common/utils';
import { UserFromApi } from '../user/user.entity';
import shortid = require('shortid');
@Injectable()
export class HostService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    @InjectRepository(Color)
    private readonly repositoryColor: Repository<Color>,
    @InjectRepository(Category)
    private readonly repositoryCate: Repository<Category>,
    @InjectRepository(SizeTable)
    private readonly repositorySize: Repository<SizeTable>,
    @InjectRepository(Brand)
    private readonly repositoryBrand: Repository<Brand>,
    @InjectRepository(Product)
    private readonly repositoryPro: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly repositoryProDe: Repository<ProductDetail>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  public async uploadDb(body: any, own: User, data: any): Promise<any> {
    let Aproduct = new Product();
    let check = await this.repositoryPro.findOne({
      where: { code: body.code },
    });

    Aproduct.id_product = shortid.generate();
    Aproduct.code = body.code;
    Aproduct.kind = body.sex;
    Aproduct.name = body.name;
    Aproduct.price = body.price;
    Aproduct.new = body.new;
    Aproduct.description = body.descript;
    Aproduct.avar = data[0].buffer;
    let brand = new Brand();
    brand.name_brand = body.brand;
    brand.id_brand = shortid.generate();
    const t = await this.repositoryBrand.findOne({
      where: { name_brand: brand.name_brand },
    });
    if (!t) {
      await this.repositoryBrand.save(brand);
    }

    let cate = new Category();
    cate.name_cate = body.cate;
    cate.id_cate = shortid.generate();

    let color_1 = new Color();
    color_1.name_color = body.color;
    color_1.id_color = shortid.generate();
    const t2 = await this.repositoryColor.findOne({
      where: { name_color: color_1.name_color },
    });
    if (!t2) {
      await this.repositoryColor.save(color_1);
    }

    let size_1 = new SizeTable();
    size_1.name_size = body.size;
    size_1.name_size = shortid.generate();
    const t3 = await this.repositorySize.findOne({
      where: { name_size: size_1.name_size },
    });
    if (!t3) {
      await this.repositorySize.save(size_1);
    }

    const t1 = await this.repositoryCate.findOne({
      where: { name_cate: cate.name_cate },
    });
    if (!t1) {
      await this.repositoryCate.save(cate);
    }

    Aproduct.brand = body.brand;
    Aproduct.cate = body.cate;
    if (check) {
      let id_product = check.id_product;
      Aproduct.id_product = id_product;
      await this.repositoryPro.update(
        { id_product: id_product },
        {
          code: body.code,
          brand: body.brand,
          cate: body.cate,
          name: body.name,
          new: body.new,
          price: body.price,
          description: body.decript,
          avar: data[0].buffer,
        },
      );
    } else await this.repositoryPro.save(Aproduct);

    let color_ = body.color.split(',');
    let size_ = body.size.split(',');
    let quantity_ = body.quan.split(',');

    for (let ind = 0; ind < size_.length; ind++) {
      let detail = new ProductDetail();
      let size = size_[ind];
      let color = color_[ind];
      let quantity = quantity_[ind];

      let check = await this.repositoryProDe.findOne({
        where: { id_product: body.id_product, size: size, color: color },
      });

      if (check) {
        await this.repositoryProDe.update(
          { id_product: body.id_product, size: size, color: color },
          {
            quantity: Number(check.quantity) + Number(quantity),
          },
        );
      } else {
        detail.color = color;
        detail.size = size;
        detail.quantity = quantity;
        detail.id_product = Aproduct.id_product;
        await this.repositoryProDe.save(detail);
      }
    }
    return 'ok';
  }

  public async getProduct(): Promise<any> {
    const product = await this.repositoryPro.query(
      'select * from product join product_detail on product.id_product=product_detail.id_product ',
    );
    let res = [];
    product.forEach((e, ind) => {
      let clone1 = [];
      clone1.push(e.id_product);
      clone1.push(e.code);
      clone1.push(e.name);
      if (e.quantity > 0) clone1.push('OK');
      else clone1.push('Need update');
      clone1.push(e.price);
      clone1.push(e.brand);
      clone1.push(e.cate);
      clone1.push(e.size);
      clone1.push(e.color);
      clone1.push(e.quantity);
      res.push(clone1);
    });
    return res;
  }
  public async getDetailProductById(id: string): Promise<any> {
    let product = await this.repositoryPro.query(
      `select *  from product p  where p.id_product='${id}'`,
    );

    let property = await this.repositoryProDe.query(
      `select size,color,quantity from product_detail where product_detail.id_product='${id}'`,
    );
    let size = [];
    let color = [];
    let quantity = [];
    property.forEach((e) => {
      size.push(e.size);
      color.push(e.color);
      quantity.push(e.quantity);
    });
    product[0].size = size;
    product[0].color = color;
    product[0].quantity = quantity;
    return product[0];
  }

  public async getCustomer(): Promise<any> {
    const data = await this.userService.getUser();
    console.log(data);
    let res = [];

    data.forEach((e) => {
      let data = Object.values(e);
      data.pop();
      res.push(data);
    });
    return res;
  }
  public async getOrder(): Promise<any> {
    let res = [];
    let data = await this.userService.getOrderHost();
    console.log(data);
    data.sort((a, b) => a.id_order - b.id_order);
    for (let e of data) {
      let tmp = {
        id_order: e.id_order,
        email: e.email,
        address: e.address,
        date: e.set_at.toString().substr(4, 12),
        total: e.total,
        gift: e.voucher,
        state: e.state,
        detail: e.detail,
      };
      res.push(Object.values(tmp));
    }
    return res;
  }

  public async getRevenue(y: number) {
    return await this.userService.getRevenue(y);
  }

  public async deleteProduct(constrain: any) {
    return await this.repositoryProDe.delete(constrain);
  }

  public async updateProduct(constrain: any, body: any) {
    let id_product = constrain.id_product;

    let quantity = body.quantity;
    console.log(quantity);
    let name_cate = body.cate;
    let name_brand = body.brand;
    let check_cate = await this.repositoryCate.findOne({
      where: { name_cate: name_cate },
    });
    let check_brand = await this.repositoryBrand.findOne({
      where: { name_brand: name_brand },
    });
    if (!check_cate) {
      let Cate = new Category();
      Cate.name_cate = name_cate;
      Cate.id_cate = shortid.generate();
      this.repositoryCate.save(Cate);
    }
    if (!check_brand) {
      let Brand_ = new Brand();
      Brand_.name_brand = name_brand;
      Brand_.id_brand = shortid.generate();
      this.repositoryBrand.save(Brand_);
    }

    await this.repositoryPro.update(
      { id_product: id_product },
      {
        name: body.name,
        price: body.price,
        cate: body.cate,
        brand: body.brand,
      },
    );
    let checkDp = await this.repositoryProDe.findOne({
      where: constrain,
    });
    console.log(constrain);
    if (checkDp)
      return await this.repositoryProDe.update(constrain, {
        quantity: quantity,
      });
    else
      return await this.repositoryProDe.update(constrain, {
        quantity: quantity,
        size: constrain.size,
        color: constrain.color,
      });
  }

  public async getBrand() {
    return await this.repositoryBrand.find();
  }
  public async getCate() {
    return await this.repositoryCate.find();
  }
  public async getColor() {
    return await this.repositoryColor.find();
  }
  public async getSize() {
    return await this.repositorySize.find();
  }
  public async getProductByFilter(id_page: string) {
    let res = [];
    let toArr = id_page.split(',');
    let constrProduct = Object();
    let constrDetail = Object();
    toArr.forEach((e) => {
      let tmp = e.split(':');
      if (tmp[0] === 'brand') {
        constrProduct.brand = tmp[1];
      } else if (tmp[0] === 'cate') {
        constrProduct.cate = tmp[1];
      } else if (tmp[0] === 'size') {
        constrDetail.size = tmp[1];
      } else if (tmp[0] === 'color') {
        constrDetail.color = tmp[1];
      }
    });
    let findProduct;
    let findDetail;
    if (id_page === '') {
      findProduct = await this.repositoryPro.find();
    } else {
      findProduct = await this.repositoryPro.find({
        where: constrProduct,
      });
      findDetail = await this.repositoryProDe.find({
        where: constrDetail,
      });
    }
    for (let e of findProduct)
      for (let i of findDetail) {
        if (i.id_product === e.id_product) {
          res.push(e);
        }
      }
    return res;
  }

  public async getProductById(id_page: any) {
    if (id_page === 'all') return await this.repositoryPro.find();
    else if (id_page === 'new')
      return await this.repositoryPro.query(
        'select * from product where product.new=true',
      );
    else if (id_page === 'men')
      return await this.repositoryPro.query(
        `select * from product where product.kind='Men'`,
      );
    else if (id_page === 'women')
      return await this.repositoryPro.query(
        `select * from product where product.kind='Women'`,
      );
    else if (id_page === 'sale')
      return await this.repositoryPro.query(
        'select * from product where product.sale=true',
      );
  }
  public async handleOrder(
    id_product: any,
    color: any,
    size: any,
    quantity: any,
  ) {
    let dp = await this.repositoryProDe.findOne({
      where: { id_product: id_product, size: size, color: color },
    });

    if (!dp || dp.quantity < quantity)
      throw new HttpException('Invalid', HttpStatus.NOT_FOUND);

    return await this.repositoryProDe.update(
      { id_product: id_product, size: size, color: color },
      { quantity: dp.quantity - quantity },
    );
  }

  public async setConfirm(body: any) {
    console.log(body);
    let list_id_order = body.list_id_order;

    return this.userService.setConfirm(list_id_order[0]);
  }
}
