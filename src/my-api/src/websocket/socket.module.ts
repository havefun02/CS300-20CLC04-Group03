import { Module } from '@nestjs/common';
import { EventsGateway } from './socket.service';

@Module({
  providers: [EventsGateway],
})
export class SocketModule {}
