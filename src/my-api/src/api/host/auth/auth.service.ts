import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../host.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto, LoginDto, ChangeDto } from './auth.dto';
import { AuthHelper } from './auth.helper';
import { UserFromApi } from '@/api/user/user.entity';
import shortid = require('shortid');

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @InjectRepository(UserFromApi)
  private readonly repositoryApi: Repository<UserFromApi>;

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
    user.id_user = shortid.generate();
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
    const isPasswordValid = this.helper.isPasswordValid(
      password,
      user.password,
    );
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    this.repository.update(user.id_user, { lastLoginAt: new Date() });
    return this.helper.generateToken(user);
  }

  public async changePass(
    body: ChangeDto,
    user_: User,
  ): Promise<string | never> {
    console.log(user_);
    const { pre, password }: ChangeDto = body;
    const id_user: string = user_.id_user;
    const user: User = await this.repository.findOne({ where: { id_user } });
    console.log(user);

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    // const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);
    const isPasswordValid = this.helper.isPasswordValid(pre, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      throw new HttpException('Invalid', HttpStatus.NOT_FOUND);
    }
    let enpassword = this.helper.encodePassword(password);

    this.repository.update(user.id_user, { password: enpassword });
    return this.helper.generateToken(user);
  }

  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id_user, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}
