import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart, Item } from './cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Item])],
  controllers: [],
  providers: [],
})
export class CartModule {}
