import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { RoomsService } from '../rooms/rooms.service';

@WebSocketGateway()
export class ChatGateway {
  constructor(private roomService: RoomsService) {}

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('join')
  async joinToRoom(client, data: any): Promise<any> {
    client.join(data[0]);

    const messages = await this.roomService.getMessages(data);

    client.emit('message', messages);
  }

  @SubscribeMessage('leave')
  onRoomLeave(client, data: any): void {
    client.leave(data[0]);
  }
}
