import {
  ClassSerializerInterceptor,
  Controller,
  Req,
  UseGuards,
  UseInterceptors,
  Put,
  Body,
  Inject,
  Get,
  Param,
} from '@nestjs/common';
import { UpdateNameDto } from './user.dto';
import { UserFromApi } from './user.entity';
import { UserService } from './user.service';
import { Post } from '@nestjs/common/decorators';
import { Request } from 'express';
import { JwtAuthGuard } from '../host/auth/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { REQUEST } from '@nestjs/core';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Post('login')
  private loginCustomer(@Body() body): Promise<string | never> {
    return this.service.loginCustomer(body);
  }

  @Post('get-user')
  private async getUserbyToken(@Body() body) {
    return await this.service.getUserbyToken(body);
  }

  @Post('update-profile:email')
  private async updateProfile(@Param() param, @Body() body) {
    console.log(body);
    return await this.service.updateProfile(param, body);
  }

  @Get('get-cate')
  private async getCate() {
    return await this.service.getCate();
  }
  @Get('get-brand')
  private async getBrand() {
    return await this.service.getBrand();
  }
  @Get('get-color')
  private async getColor() {
    return await this.service.getColor();
  }
  @Get('get-size')
  private async getSize() {
    return await this.service.getSize();
  }

  @Get('get-product/:id')
  private async getMainPage(@Param() id_page: any) {
    console.log(id_page);
    return this.service.getMainPage(id_page.id);
  }
  @Get('get-product/apply/:id')
  private async getMainPageApply(@Param() id_page: any) {
    console.log(id_page);
    return this.service.getMainPageApply(id_page.id);
  }
  @Get('men')
  private async getbyMen() {
    return this.service.getbySex();
  }
  @Get('women')
  private async getbyWomen() {
    return this.service.getbySex();
  }
  @Get('sale')
  private async getBySale() {
    return this.service.getbySaleOff();
  }

  @Post('set-user')
  private async setUser(@Body() body: any) {
    return this.service.setUser(body);
  }
  @Get('get-user')
  private async getUser(): Promise<UserFromApi[]> {
    return this.service.getUser();
  }
}
