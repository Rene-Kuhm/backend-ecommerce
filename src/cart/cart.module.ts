import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './cart.entity';
import { CartItem } from './cart-item.entity';
import { LocalUser } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, LocalUser])],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
