import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../host/auth/auth.module';
import { GoogleStrategy } from './auth/google-oauth.strategy';
import { TransModule } from './trans/trans.module';
import { Cart } from './cart/cart.entity';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [TransModule, CartModule],
  controllers: [UserController],
  providers: [UserService, GoogleStrategy],
})
export class UserModule {}
