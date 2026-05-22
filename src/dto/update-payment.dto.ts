import { IsString, IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsString()
  status?: string;
}
