import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Request } from 'express';
import { User } from './host.entity';
import { GroupImg, Product, ProductDetail } from './product/product.entity';
import { Color } from './product/color.entity';
import { SizeTable } from './product/size.entity';
import { Brand } from './product/brand.entity';
import { Category } from './product/category.entity';
import { close } from 'fs';
import { UserService } from '../user/user.service';
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
    @InjectRepository(GroupImg)
    private readonly repositoryImg: Repository<GroupImg>,
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  public async uploadDb(body: any, own: User, data: any): Promise<any> {
    let Aproduct = new Product();
    let code = body.code;
    let check = await this.repositoryPro.findOne({ where: { code } });
    Aproduct.code = body.code;
    Aproduct.name = body.name;
    Aproduct.price = body.price;
    Aproduct.new = body.new;
    Aproduct.description = body.decript;
    Aproduct.avar = data[0].buffer;
    data.splice(0, 1);
    for (let i of data) {
      let Img = new GroupImg();
      Img.source = i.buffer;
      Img.code = code;
      await this.repositoryImg.save(Img);
    }
    let brand = new Brand();
    brand.name_brand = body.brand;
    let name_brand: string = body.brand;
    const t = await this.repositoryBrand.findOne({ where: { name_brand } });
    if (!t) {
      await this.repositoryBrand.save(brand);
    }

    let cate = new Category();
    cate.name_cate = body.cate;
    let name_cate: string = body.cate;
    const t1 = await this.repositoryCate.findOne({ where: { name_cate } });
    if (!t1) {
      await this.repositoryCate.save(cate);
    }

    Aproduct.brand = body.brand;
    Aproduct.cate = body.cate;
    if (check) {
      await this.repositoryImg.delete({ code });
      for (let e of data) {
        let img = new GroupImg();
        img.source = e.buffer;
        img.code = code;
        await this.repositoryImg.save(img);
      }
      let id_product = check.id_product;
      await this.repositoryPro.update(
        { id_product, code },
        {
          brand: body.brand,
          cate: body.cate,
          name: body.name,
          new: body.new,
          price: body.price,
          description: body.decript,
          avar: body.avar,
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
        where: { code, size, color },
      });
      console.log(check);
      if (check) {
        await this.repositoryProDe.update(
          { code, size, color },
          {
            quantity: Number(check.quantity) + Number(quantity),
          },
        );
      } else {
        detail.code = code;
        detail.color = color;
        detail.size = size;
        detail.quantity = quantity;
        await this.repositoryProDe.save(detail);
      }
    }
    return 'ok';
  }

  public async getProduct(): Promise<any> {
    const product = await this.repositoryPro.query(
      'select * from product join product_detail on product.code=product_detail.code ',
    );
    console.log(product);
    let res = [];
    product.forEach((e, ind) => {
      let clone1 = [];
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
  public async getCustomer(): Promise<any> {
    const data = await this.userService.getUser();
    let res = [];
    data.forEach((e) => {
      res.push(Object.values(e));
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
    await this.repositoryProDe.update(constrain, body);
    return await this.repositoryProDe.update(constrain, body);
  }
}
