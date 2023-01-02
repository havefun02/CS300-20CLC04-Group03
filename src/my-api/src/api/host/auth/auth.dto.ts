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
  @MinLength(8)
  public readonly password: string;
}

export class ChangeDto {
  @IsString()
  @MinLength(8)
  public readonly password: string;
  @IsString()
  @MinLength(8)
  public readonly pre: string;
}
