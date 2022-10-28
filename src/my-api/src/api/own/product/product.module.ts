import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, SizeTable } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), TypeOrmModule.forFeature([SizeTable])],
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
