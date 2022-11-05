import { Module } from '@nestjs/common';
import { AuthController } from './goole-oauth.controller';
import { AuthService } from './google-oauth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
