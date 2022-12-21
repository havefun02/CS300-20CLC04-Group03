import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getstr(): string {
    return 'Test';
  }

  postlist(): any {
    let object = {email: 'ndm@gmail.com', password: '123'};
    return object;
  }
}
