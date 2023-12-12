import { Injectable } from '@nestjs/common';
import { PostType } from "@my-project/types";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
