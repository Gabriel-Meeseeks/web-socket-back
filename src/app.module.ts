import { Module } from '@nestjs/common';
import { WebSocketsGateway } from './web-socket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [WebSocketsGateway],
})
export class AppModule {}
