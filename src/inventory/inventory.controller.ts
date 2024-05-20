import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';
import { InventoryItem } from './inventory-item.entity';
import { CreateInventoryDto } from '../dto/create-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(InventoryItem)
    private inventoryItemRepository: Repository<InventoryItem>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const { name, items } = createInventoryDto;
    const inventory = new Inventory();
    inventory.name = name;
    inventory.items = items.map((itemDto) => {
      const item = new InventoryItem();
      item.productId = itemDto.productId;
      item.quantity = itemDto.quantity;
      item.price = itemDto.price;
      return item;
    });
    return this.inventoryRepository.save(inventory);
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryRepository.find({ relations: ['items'] });
  }

  // Additional methods for finding, updating, and deleting inventories can be added here
}
