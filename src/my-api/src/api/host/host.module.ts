import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HostController } from './host.controller';
import { HostService } from './host.service';
import { User } from './host.entity';
import { Category } from './product/category.entity';
import { SizeTable } from './product/size.entity';
import { Color } from './product/color.entity';
import { GroupImg, Product, ProductDetail } from './product/product.entity';
import { Brand } from './product/brand.entity';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Category,
      SizeTable,
      Brand,
      Color,
      Product,
      ProductDetail,
      GroupImg,
    ]),
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [HostController],
  providers: [HostService],
})
export class HostModule {}
