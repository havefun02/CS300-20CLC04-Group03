import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackingProduct } from './tracking.entity';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(TrackingProduct)
    private readonly TrackingRepository: Repository<TrackingProduct>,
  ) {}
}
