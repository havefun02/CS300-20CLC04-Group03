import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailOrder } from './detailorder.entity';
import { Order } from './order.entity';
import { PaymentMethod } from './payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, Order, DetailOrder])],
  controllers: [],
  providers: [],
})
export class OrderModule {}
