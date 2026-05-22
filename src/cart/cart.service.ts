import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { CartItem } from './cart-item.entity';
import { CreateCartDto } from '../dto/create-cart.dto';
import { LocalUser } from '../users/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
    @InjectRepository(LocalUser)
    private userRepository: Repository<LocalUser>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const { userId, items } = createCartDto;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const cart = new Cart();
    cart.user = user;
    cart.items = items.map((itemDto) => {
      const item = new CartItem();
      item.productId = itemDto.productId;
      item.quantity = itemDto.quantity;
      item.price = itemDto.price;
      return item;
    });
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return this.cartRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.find({ relations: ['items', 'user'] });
  }

  // Additional methods for finding, updating, and deleting carts can be added here
}
