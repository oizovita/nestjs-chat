import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Message } from './message.schema';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] })
  messages: Message[];

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
