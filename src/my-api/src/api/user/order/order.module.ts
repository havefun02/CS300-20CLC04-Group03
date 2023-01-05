import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { DetailOrder } from './detailorder.entity';
import { Order } from './order.entity';
import { PaymentMethod } from './payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentMethod, Order, DetailOrder, Cart]),
  ],
  controllers: [],
  providers: [],
})
export class OrderModule {}
