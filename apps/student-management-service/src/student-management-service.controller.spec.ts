import { Test, TestingModule } from '@nestjs/testing';
import { StudentManagementServiceController } from './student-management-service.controller';
import { StudentManagementServiceService } from './student-management-service.service';

describe('StudentManagementServiceController', () => {
  let studentManagementServiceController: StudentManagementServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudentManagementServiceController],
      providers: [StudentManagementServiceService],
    }).compile();

    studentManagementServiceController = app.get<StudentManagementServiceController>(StudentManagementServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(studentManagementServiceController.getHello()).toBe('Hello World!');
    });
  });
});
