import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class UserService {
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
