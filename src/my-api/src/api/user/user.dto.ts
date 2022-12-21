import { Trim } from 'class-sanitizer';
import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import internal from 'stream';

export class UserDataDto {
  //{ id_userFromApi, email, name, phonenumber, address, point, level }
  @Trim()
  @IsEmail()
  public readonly email!: string;
  @IsString()
  public readonly name: string;
  @IsString()
  public readonly phonenumber: string;
  @IsString()
  public readonly address: string;
}