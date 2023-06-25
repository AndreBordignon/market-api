import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return this.userModel.create(createUserDto);
  }
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number) {
    // return this.userModel.findOne(id);
    return null;
  }
}
