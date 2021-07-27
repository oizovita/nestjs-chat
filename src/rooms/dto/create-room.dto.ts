import { IsArray, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty()
  @IsArray()
  users: mongoose.Schema.Types.ObjectId[];
}
