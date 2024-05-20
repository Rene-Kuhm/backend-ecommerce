import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { CreateInventoryItemDto } from './create-inventory-item.dto';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  items: CreateInventoryItemDto[];
}
