import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.UserModel.create(createUserDto);
  }

  async findAll(): Promise<UserDocument[]> {
    return this.UserModel.find({}).exec();
  }

  async findOne(options: any): Promise<UserDocument | null> {
    return this.UserModel.findOne(options).exec();
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument | null> {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: number): Promise<UserDocument | null> {
    return this.UserModel.findByIdAndRemove(id).exec();
  }
}
