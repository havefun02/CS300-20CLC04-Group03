import { Module } from '@nestjs/common';
import { HostModule } from './host/host.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HostModule],
})
export class ApiModule {}
