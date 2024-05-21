import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LocalUser } from '../users/user.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  method: string;

  @Column()
  status: string;

  @ManyToOne(() => LocalUser, (user) => user.payments)
  user: LocalUser;

  @ManyToOne(() => Order, (order) => order.payments)
  order: Order;
}
