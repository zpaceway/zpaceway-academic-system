import { Test, TestingModule } from '@nestjs/testing';
import { StudentPaymentServiceController } from './student-payment-service.controller';
import { StudentPaymentServiceService } from './student-payment-service.service';

describe('StudentPaymentServiceController', () => {
  let studentPaymentServiceController: StudentPaymentServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudentPaymentServiceController],
      providers: [StudentPaymentServiceService],
    }).compile();

    studentPaymentServiceController = app.get<StudentPaymentServiceController>(StudentPaymentServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(studentPaymentServiceController.getHello()).toBe('Hello World!');
    });
  });
});
