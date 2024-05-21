import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { InventoryItem } from './inventory-item.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => InventoryItem, (item) => item.inventory, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  items: InventoryItem[];
}
