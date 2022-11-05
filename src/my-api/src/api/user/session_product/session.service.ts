import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Product } from '@/api/host/product/product.entity';

@Injectable()
export class SessionService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;
  // public async updateName(body: UpdateNameDto, req: Request): Promise<User> {
  //   const user: User = <User>req.user;

  //   user.name = body.name;

  //   return this.repository.save(user);
  // }
}
