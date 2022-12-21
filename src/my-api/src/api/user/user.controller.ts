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
  Post,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '@/api/host/auth/auth.guard';
import { UserDataDto } from './user.dto';
import { UserFromApi } from './user.entity';
import { UserService } from './user.service';

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


  @Get('stream')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  private get_data(): Promise<UserFromApi> {
    return this.service.get_data()
  }

  @Post('stream_in')
  @UseInterceptors(ClassSerializerInterceptor)
  private set_data(@Body() body: UserDataDto): Promise<UserFromApi> {
    console.log(body)
    return this.service.set_data(body)
  }
}
