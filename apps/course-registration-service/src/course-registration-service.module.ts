import { Module } from '@nestjs/common';
import { CourseRegistrationServiceController } from './course-registration-service.controller';
import { CourseRegistrationServiceService } from './course-registration-service.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [CourseRegistrationServiceController],
  providers: [CourseRegistrationServiceService],
})
export class CourseRegistrationServiceModule {}
