import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GoogleStrategy } from './auth/google-oauth.strategy';
import { TransModule } from './trans/trans.module';
import { CartModule } from './cart/cart.module';
import { UserFromApi } from './user.entity';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserFromApi]), OrderModule, CartModule],
  controllers: [UserController],
  providers: [UserService, GoogleStrategy],
})
export class UserModule {}
