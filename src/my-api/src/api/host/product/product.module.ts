import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Color,
  Product,
  ProductSizeProperty,
  SizeTable,
} from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Color]),
    TypeOrmModule.forFeature([SizeTable]),
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([ProductSizeProperty]),
  ],
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
