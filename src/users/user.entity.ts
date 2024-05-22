import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { Notification } from '../notifications/notification.entity';
import { Order } from '../orders/order.entity';
import { Payment } from '../payments/payment.entity';
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

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];
}
