import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from './chat.gateway';
import { ChatModule } from './chat/chat.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RoomsModule,
    AuthModule,
    ChatModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
