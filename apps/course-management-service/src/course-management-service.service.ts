import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseManagementServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
