import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingProduct } from './tracking.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TrackingProduct])],
  controllers: [],
  providers: [],
})
export class TrackingModule {}
