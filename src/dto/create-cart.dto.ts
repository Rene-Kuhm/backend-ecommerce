import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { CreateCartItemDto } from './create-cart-item.dto';

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsArray()
  items: CreateCartItemDto[];
}
