import {
  Body,
  Controller,
  Inject,
  Post,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { RegisterDto, LoginDto, ChangeDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { User } from '../host.entity';
@Controller('host')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  private register(
    @Req() req: Request,
    @Body() body: RegisterDto,
  ): Promise<User | never> {
    console.log(body);
    return this.service.register(body);
  }

  @Post('login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    console.log(body);
    return this.service.login(body);
  }
  @Post('change-pass')
  @UseGuards(JwtAuthGuard)
  private changePass(
    @Req() req: Request,
    @Body() body: ChangeDto,
  ): Promise<string | never> {
    return this.service.changePass(body, <User>req.user);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<User>user);
  }
}
