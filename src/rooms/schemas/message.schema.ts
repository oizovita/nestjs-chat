import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  body: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
