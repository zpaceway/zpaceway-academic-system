import { Module } from '@nestjs/common';
import { CourseManagementServiceController } from './course-management-service.controller';
import { CourseManagementServiceService } from './course-management-service.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [CourseManagementServiceController],
  providers: [CourseManagementServiceService],
})
export class CourseManagementServiceModule {}
