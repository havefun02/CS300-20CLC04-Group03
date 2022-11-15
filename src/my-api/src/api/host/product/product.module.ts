import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Color } from './color.entity';
import { Product, ProductDetail } from './product.entity';
import { SizeTable } from './size.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      SizeTable,
      Color,
      Product,
      ProductDetail,
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductModule {}
