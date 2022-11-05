import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { SizeTable } from './product/product.entity';

export class RegisterHostDto {
  @Trim()
  @IsEmail()
  public readonly username: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;
}

export class LoginOwnDto {
  @Trim()
  @IsEmail()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}

export class UpdateNameOwnDto {
  @IsString()
  @IsOptional()
  public readonly name?: string;
}
