import { UserFromApi } from '@/api/user/user.entity';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard as Guard, IAuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../host.entity';

@Injectable()
export class JwtAuthGuard extends Guard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }
  public handleRequest1(err: unknown, user: UserFromApi): any {
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const { user }: Request = context.switchToHttp().getRequest();

    return user ? true : false;
  }
}
