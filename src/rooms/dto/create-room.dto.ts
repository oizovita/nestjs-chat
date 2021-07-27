import { IsArray, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoomDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  users: mongoose.Schema.Types.ObjectId[];
}
