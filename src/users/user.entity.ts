import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { Notification } from 'src/notifications/notification.entity';
import { Order } from 'src/orders/order.entity';
@Entity()
export class LocalUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  password: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
