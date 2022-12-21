import { Post } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Console } from 'console';
import { AppService } from './app.service';
import { Request } from 'express';
import { Body } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth/test')
  getstr(): string {
    return this.appService.getstr();
  }

  @Post('auth/new')
  postlist(): any
  {
    return this.appService.postlist();
  }

}
