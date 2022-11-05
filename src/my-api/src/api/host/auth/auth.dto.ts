import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Trim()
  @IsEmail()
  public readonly username: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;
}

export class LoginDto {
  @Trim()
  @IsEmail()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}
