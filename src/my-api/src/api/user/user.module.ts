import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserFromApi } from './user.entity';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { DetailOrder } from './order/detailorder.entity';
import { Cart } from './order/cart.entity';
import { PaymentMethod } from './order/payment.entity';
import { HostModule } from '../host/host.module';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from '../host/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserFromApi,
      Order,
      DetailOrder,
      Cart,
      PaymentMethod,
    ]),
    forwardRef(() => HostModule),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
