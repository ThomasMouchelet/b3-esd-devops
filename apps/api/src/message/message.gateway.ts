import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: "*" } })
export class MessageGateway {
    @WebSocketServer()
    server: Server;

    async handleConnection(socket: Socket) {
        console.log(`Client connected: ${socket.id}`);
    }

    async handleDisconnect(socket: Socket) {
        console.log(`Client disconnected: ${socket.id}`);
    }

    @SubscribeMessage('sendMessage')
    async message(client: Socket, message) {
        console.log(message);
        this.server.emit('receiveMessage', message);
    }
}