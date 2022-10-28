import { Module } from '@nestjs/common';
import { OwnModule } from './own/own.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [OwnModule],
})
export class ApiModule {}
