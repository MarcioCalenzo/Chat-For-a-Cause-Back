import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'marcio@mail.com',
  })
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '12345678',
  })
  @ApiProperty()
  @IsString()
  password: string;
}
