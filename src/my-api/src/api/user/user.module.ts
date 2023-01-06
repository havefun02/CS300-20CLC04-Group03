import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserFromApi, Voucher } from './user.entity';
import { Order } from './order/order.entity';
import { DetailOrder } from './order/detailorder.entity';
import { Cart } from './order/cart.entity';
import { HostModule } from '../host/host.module';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from '../host/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserFromApi, Order, DetailOrder, Cart, Voucher]),
    forwardRef(() => HostModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
