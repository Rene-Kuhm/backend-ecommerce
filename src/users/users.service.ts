import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalUser } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(LocalUser)
    private usersRepository: Repository<LocalUser>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<LocalUser> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll(): Promise<LocalUser[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<LocalUser> {
    return this.usersRepository.findOneBy({ id });
  }

  async findByUsername(username: string): Promise<LocalUser | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<LocalUser> {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
