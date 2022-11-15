import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from '../order/payment.entity';
import { Items } from './item.entity';
import { Trans } from './trans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, Trans, Items])],
  controllers: [],
  providers: [],
})
export class TransModule {}
