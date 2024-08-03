import { Controller } from '@nestjs/common';
import { CourseManagementServiceService } from './course-management-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CourseManagementServiceController {
  constructor(
    private readonly courseManagementServiceService: CourseManagementServiceService,
  ) {}

  @MessagePattern({ type: 'ping' })
  ping(request: unknown) {
    return { status: 'success', service: 'course-management', request };
  }
}
