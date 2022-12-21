import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';

import { UserFromApi } from './user.entity';
import { Console } from 'console';
import { UserDataDto } from './user.dto';

import { Inject } from '@nestjs/common/decorators';


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

  public async get_data(): Promise<UserFromApi> {
    //const { id_userFromApi, email, name, phonenumber, address, point, level }: UserFromApi = body;
    const user: UserFromApi[] = await this.repository.find();
    console.log(user);
    return ;//this.helper.generateToken(user);
  }


  public async set_data(body: UserDataDto): Promise<UserFromApi> {
    const { email, name, phonenumber, address}: UserDataDto = body;
    let user: UserFromApi = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    
    user = new UserFromApi();
    user.email = email;
    user.name = name;
    user.phonenumber = phonenumber;
    user.address = address;
    
    return await this.repository.save(user);
  }
}
