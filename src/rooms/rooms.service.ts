import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';
import { Message } from './schemas/message.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async create(createRoomDto: CreateRoomDto) {
    return this.roomModel.create(createRoomDto);
  }

  async findAll() {
    return this.roomModel.find({}).exec();
  }

  async findOne(options?: any) {
    return this.roomModel.findOne(options).exec();
  }

  async remove(id: string) {
    return this.roomModel.findByIdAndRemove(id).exec();
  }

  async addMessage(message: Message, id: string) {
    const room = await this.findOne({ id });
    room.messages.push(message);

    return room.save();
  }

  async getMessages(id: string) {
    const room = await this.findOne({ id });

    return room.messages;
  }
}
