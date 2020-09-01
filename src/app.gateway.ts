import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

interface SetAppointment {
  facility: string;
}

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGateway');
  private server: Server;

  afterInit(server: Server) {
    this.server = server;
    this.logger.log('Sockets initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Socket connected ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Socket disconnected ${client.id}, goodbye`);
  }

  // @SubscribeMessage('setAppointment')
  // handleMessage(client: Socket, data: SetAppointment) {
  //   console.log('emittiing', data.facility + '-creatingAppointment');
  //   this.server.emit(data.facility + '-creatingAppointment');
  //   // return { event: "appointmentBeingSet", data: text };
  // }
}
