import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from '../dto/create-cart.dto';
import { Cart } from './cart.entity';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  // Additional endpoints for finding, updating, and deleting carts can be added here
}
