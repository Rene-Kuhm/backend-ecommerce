import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { LocalUser } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(LocalUser)
    private usersRepository: Repository<LocalUser>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<LocalUser> {
    const user = this.usersRepository.create(
      createUserDto as DeepPartial<LocalUser>,
    );
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<LocalUser[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<LocalUser> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<LocalUser> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.usersRepository.remove(user);
  }

  async findByUsername(username: string): Promise<LocalUser | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }
}
