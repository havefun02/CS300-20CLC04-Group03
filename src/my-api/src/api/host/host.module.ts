import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HostController } from './host.controller';
import { HostService } from './host.service';
import { ProductModule } from './product/product.module';
import { User } from './host.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class HostModule {}
