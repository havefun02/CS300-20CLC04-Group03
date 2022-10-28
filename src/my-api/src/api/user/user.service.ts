import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { UpdateNameDto } from './user.dto';
import { UserFromApi } from './user.entity';
import { Session } from 'inspector';
import { SessionService } from './session_product/session.service';

@Injectable()
export class UserService {
  @InjectRepository(UserFromApi)
  private readonly SessionRepository: SessionService;

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
