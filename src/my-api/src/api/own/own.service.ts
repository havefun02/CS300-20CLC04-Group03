import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Request } from 'express';
import { User } from './own.entity';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
@Injectable()
export class OwnService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly productRepository: ProductService,
  ) {}

  public async uploadDb(body: any, own: User, data: Buffer) {
    let ProductEntity = await this.productRepository.createProduct(body, own, data);
    return ProductEntity;
  }

  public async getProduct() {
    return await this.productRepository.getProduct();
  }

  public async deleteProduct(key: string) {
    return await this.productRepository.deteleProduct(key);
  }
}
