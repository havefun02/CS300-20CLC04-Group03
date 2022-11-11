import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../host.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto, LoginDto } from './auth.dto';
import { AuthHelper } from './auth.helper';
import { UserModule } from '../../user/user.module';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterDto): Promise<User | never> {
    const { username, password }: RegisterDto = body;
    let user: User = await this.repository.findOne({ where: { username } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    user = new User();
    // user.name = name;
    user.username = username;
    user.password = this.helper.encodePassword(password);

    return await this.repository.save(user);
  }

  public async login(body: LoginDto): Promise<string | never> {
    const { username, password }: LoginDto = body;
    const user: User = await this.repository.findOne({ where: { username } });
    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    // const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    this.repository.update(user.id_user, { lastLoginAt: new Date() });
    return this.helper.generateToken(user);
  }

  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id_user, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}
