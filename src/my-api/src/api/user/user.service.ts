import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Inject } from '@nestjs/common/decorators';
import { UserFromApi } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(UserFromApi)
  private readonly repository: Repository<UserFromApi>;

  public setUser(body: any) {
    const user = new UserFromApi();
    user.email = 'lap@gmail.com';
    user.address = 'lap@gmail.com';
    user.phonenumber = '0123123123';
    user.name = 'lap';
    return this.repository.save(user);
  }
  public getUser(): Promise<[UserFromApi[], number]> {
    return this.repository.findAndCount();
  }
  public getMainPage() {
    return;
  }
  public getCatebyId() {
    return;
  }
  public getbySex() {
    return;
  }
  public getbySaleOff() {
    return;
  }
}
