import { Module } from '@nestjs/common';
import { HostModule } from './host/host.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HostModule, UserModule],
})
export class ApiModule {}
