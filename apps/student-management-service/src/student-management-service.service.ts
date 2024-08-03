import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentManagementServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
