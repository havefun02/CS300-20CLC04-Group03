import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './trans.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentMethod]),
    TypeOrmModule.forFeature([TransModule]),
  ],
  controllers: [],
  providers: [],
})
export class TransModule {}
