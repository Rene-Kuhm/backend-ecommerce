import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LocalUser } from '../users/user.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => LocalUser, (user) => user.notifications)
  user: LocalUser;
}
