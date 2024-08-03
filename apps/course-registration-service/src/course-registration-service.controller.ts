import { Controller } from '@nestjs/common';
import { CourseRegistrationServiceService } from './course-registration-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CourseRegistrationServiceController {
  constructor(
    private readonly courseRegistrationServiceService: CourseRegistrationServiceService,
  ) {}

  @MessagePattern({ type: 'ping' })
  ping(request: unknown) {
    return { status: 'success', service: 'course-registration', request };
  }
}
