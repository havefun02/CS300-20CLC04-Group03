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
import { Request } from 'express';
import { JwtAuthGuard } from '@/api/host/auth/auth.guard';
import { UpdateNameDto } from './user.dto';
import { UserFromApi } from './user.entity';
import { UserService } from './user.service';
import { Post } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get('session')
  private async getMainPage() {
    return this.service.getMainPage();
  }
  @Get('category/:id')
  private async getCatebyId(@Param('id') id: number) {
    return this.service.getCatebyId();
  }
  @Get('sex/:id')
  private async getbySex(@Param('id') id: number) {
    return this.service.getbySex();
  }
  @Get('sale-off')
  private async getBySaleOff() {
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
