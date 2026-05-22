import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(admin);
  }

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminRepository.findOneBy({ id });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    await this.adminRepository.update(id, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }
}
