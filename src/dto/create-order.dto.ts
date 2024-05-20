import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';
import { CreateOrderItemDto } from './create-order.item.dto';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsArray()
  items: CreateOrderItemDto[];
}
