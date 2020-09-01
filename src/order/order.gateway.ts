import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class OrderGateway implements OnGatewayConnection {
  handleConnection() {
    console.log('connected');
  }
  @WebSocketServer()
  server!: Server;
}
