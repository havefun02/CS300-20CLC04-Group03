import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Request } from 'express';
import { Product, SizeTable } from './product.entity';
import { User } from '../own.entity';
@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;
  @InjectRepository(SizeTable)
  private readonly sizeRepository: Repository<SizeTable>;

  public async createProduct(body: any, own: User, data: Buffer): Promise<any> {
    let tmp: Array<string> = Object.values(body);
    const code = tmp[5];
    const checkValid = await this.repository.findOne({ where: { code } });
    if (checkValid) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    let ProductEntity = await this.repository.create();
    let sizeEntity = await this.sizeRepository.create();
    ProductEntity.name = tmp[0];
    ProductEntity.gender = tmp[2];
    ProductEntity.price = parseInt(tmp[1]);
    ProductEntity.id_cate = tmp[3];
    ProductEntity.code = tmp[5];
    ProductEntity.avar = data;
    ProductEntity.uploadBy = 1;
    ProductEntity.uploadAt = new Date();
    for (let i = 6; i < tmp.length; i += 2) {
      switch (tmp[i].toString()) {
        case 'XXS':
          sizeEntity.size_XXS = parseInt(tmp[i + 1]);
          break;
        case 'XS':
          sizeEntity.size_XS = parseInt(tmp[i + 1]);
          break;
        case 'S':
          sizeEntity.size_S = parseInt(tmp[i + 1]);
          break;
        case 'M':
          sizeEntity.size_M = parseInt(tmp[i + 1]);
          break;
        case 'L':
          sizeEntity.size_L = parseInt(tmp[i + 1]);
          break;
        case 'XL':
          sizeEntity.size_XL = parseInt(tmp[i + 1]);
          break;
        case '2XL':
          sizeEntity.size_2XL = parseInt(tmp[i + 1]);
          break;
        case '3XL':
          sizeEntity.size_3XL = parseInt(tmp[i + 1]);
          break;
        default:
          break;
      }
    }
    ProductEntity.size = sizeEntity;
    return await this.repository.save(ProductEntity);
  }

  public async getProduct(): Promise<any> {
    let products: Array<Product> = await this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.size', 'size_table')
      .getMany();
    return products;
  }

  public async deteleProduct(key: string): Promise<any> {
    return await this.repository.createQueryBuilder().delete().from('product').where('code=:code', { code: key }).execute();
  }
}
