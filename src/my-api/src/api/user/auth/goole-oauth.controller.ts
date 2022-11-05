import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './google-oauth.service';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller('google')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}
  //ok
  @Get('redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req: Request) {
    return this.AuthService.googleLogin(req);
  }
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req: Request) {}
}
