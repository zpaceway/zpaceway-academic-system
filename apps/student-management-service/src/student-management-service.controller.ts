import { Controller } from '@nestjs/common';
import { StudentManagementServiceService } from './student-management-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('student-management-service')
export class StudentManagementServiceController {
  constructor(
    private readonly studentManagementServiceService: StudentManagementServiceService,
  ) {}

  @MessagePattern({ type: 'ping' })
  ping(request: unknown) {
    return { status: 'success', service: 'student-management', request };
  }
}
