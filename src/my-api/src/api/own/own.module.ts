import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { OwnController } from './own.controller';
import { OwnService } from './own.service';
import { ProductModule } from './product/product.module';
import { User } from './own.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
    CategoryModule,

    ProductModule,
  ],
  controllers: [OwnController],
  providers: [OwnService],
})
export class OwnModule {}
