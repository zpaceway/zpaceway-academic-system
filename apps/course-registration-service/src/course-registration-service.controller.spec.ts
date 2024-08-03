import { Test, TestingModule } from '@nestjs/testing';
import { CourseRegistrationServiceController } from './course-registration-service.controller';
import { CourseRegistrationServiceService } from './course-registration-service.service';

describe('CourseRegistrationServiceController', () => {
  let courseRegistrationServiceController: CourseRegistrationServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseRegistrationServiceController],
      providers: [CourseRegistrationServiceService],
    }).compile();

    courseRegistrationServiceController = app.get<CourseRegistrationServiceController>(CourseRegistrationServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(courseRegistrationServiceController.getHello()).toBe('Hello World!');
    });
  });
});
