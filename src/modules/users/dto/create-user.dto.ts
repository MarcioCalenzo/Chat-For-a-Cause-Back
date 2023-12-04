import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não deve ser vazio' })
  name: string;

  @IsString({ message: 'A imagem deve ser uma string' })
  @IsNotEmpty({ message: 'A imagem não deve ser vazio' })
  @IsOptional()
  image: string;

  @IsEmail({}, { message: 'Deve ser um email valido ' })
  @IsNotEmpty({ message: 'Email não deve ser vazio' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não deve ser vazio' })
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
