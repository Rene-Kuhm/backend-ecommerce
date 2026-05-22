import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Inventory } from './inventory.entity';
import { InventoryItem } from './inventory-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, InventoryItem])],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
