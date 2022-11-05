import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../host/auth/auth.module';
import { GoogleStrategy } from './auth/google-oauth.strategy';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, GoogleStrategy],
})
export class UserModule {}
