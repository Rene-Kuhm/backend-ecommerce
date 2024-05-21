import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { UsersModule } from '../users/users.module';
import { LocalUser } from '../users/user.entity';
import { Product } from '../products/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, LocalUser, Product]),
    UsersModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
