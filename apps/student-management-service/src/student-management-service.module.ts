import { Module } from '@nestjs/common';
import { StudentManagementServiceController } from './student-management-service.controller';
import { StudentManagementServiceService } from './student-management-service.service';
import { SharedModule } from '@app/shared';
import { Student } from '@app/shared/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Student])],
  controllers: [StudentManagementServiceController],
  providers: [StudentManagementServiceService],
})
export class StudentManagementServiceModule {}
