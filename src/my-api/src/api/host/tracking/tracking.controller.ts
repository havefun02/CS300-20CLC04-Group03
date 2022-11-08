import { Controller, Inject } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('controller')
export class TrackingController {
  @Inject(TrackingService)
  private readonly service: TrackingService;
}
