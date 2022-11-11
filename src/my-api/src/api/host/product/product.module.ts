import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Color,
  Product,
  ProductProperty,
  SizeTable,
} from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductProperty,
      Category,
      SizeTable,
      Color,
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductModule {}
