import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GoogleStrategy } from './auth/google-oauth.strategy';
import { UserFromApi } from './user.entity';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { DetailOrder } from './order/detailorder.entity';
import { Cart } from './order/cart.entity';
import { PaymentMethod } from './order/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserFromApi,
      Order,
      DetailOrder,
      Cart,
      PaymentMethod,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
