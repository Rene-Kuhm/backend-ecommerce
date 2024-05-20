import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { LocalUser } from '../users/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(LocalUser)
    private userRepository: Repository<LocalUser>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, items } = createOrderDto;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const order = new Order();
    order.user = user;
    order.items = items.map((itemDto) => {
      const item = new OrderItem();
      item.productId = itemDto.productId;
      item.quantity = itemDto.quantity;
      item.price = itemDto.price;
      return item;
    });
    order.totalPrice = order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    order.status = 'pending';
    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['items', 'user'] });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new Error('Order not found');
    }

    Object.assign(order, updateOrderDto);
    return this.orderRepository.save(order);
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
