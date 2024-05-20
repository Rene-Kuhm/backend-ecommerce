import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { InventoryItem } from '../inventory/inventory-item.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.inventory, {
    cascade: true,
  })
  items: InventoryItem[];
}
