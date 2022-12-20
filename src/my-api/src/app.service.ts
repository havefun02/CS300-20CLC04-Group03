import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let n: bigint;
    return (
      BigInt(3145) *
      100000000000000000000000000000000000000000000000000000000000000000n
    ).toString();
  }
  powerMod(n: bigint) {
    return n*n
  }
}
