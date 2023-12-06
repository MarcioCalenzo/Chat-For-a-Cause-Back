import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'Marcio Gabriel',
    required: false,
  })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não deve ser vazio' })
  name: string;

  @ApiProperty({
    description: 'Imagem do usuario ',
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-1004250_1280.jpg',
    required: false,
  })
  @IsString({ message: 'A imagem deve ser uma string' })
  @IsNotEmpty({ message: 'A imagem não deve ser vazio' })
  @IsOptional()
  image: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'marcio@mail.com',
    required: false,
  })
  @IsEmail({}, { message: 'Deve ser um email valido ' })
  @IsNotEmpty({ message: 'Email não deve ser vazio' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '12345678',
    required: false,
  })
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não deve ser vazio' })
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
