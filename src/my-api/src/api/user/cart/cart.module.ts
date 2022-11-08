import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart, InCart } from './cart.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart]),
    TypeOrmModule.forFeature([InCart]),
  ],
  controllers: [],
  providers: [],
})
export class CartModule {}
