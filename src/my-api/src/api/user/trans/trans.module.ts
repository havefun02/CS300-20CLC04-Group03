import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod, Trans } from './trans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, Trans])],
  controllers: [],
  providers: [],
})
export class TransModule {}
