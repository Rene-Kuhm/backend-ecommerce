import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  role: string;

  @IsNotEmpty()
  @IsEnum(['male', 'female'])
  gender: 'male' | 'female';
}
