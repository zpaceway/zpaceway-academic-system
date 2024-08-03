import { Test, TestingModule } from '@nestjs/testing';
import { CourseManagementServiceController } from './course-management-service.controller';
import { CourseManagementServiceService } from './course-management-service.service';

describe('CourseManagementServiceController', () => {
  let courseManagementServiceController: CourseManagementServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseManagementServiceController],
      providers: [CourseManagementServiceService],
    }).compile();

    courseManagementServiceController = app.get<CourseManagementServiceController>(CourseManagementServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(courseManagementServiceController.getHello()).toBe('Hello World!');
    });
  });
});
