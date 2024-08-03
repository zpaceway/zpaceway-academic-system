import { Controller } from '@nestjs/common';
import { StudentPaymentServiceService } from './student-payment-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StudentPaymentServiceController {
  constructor(
    private readonly studentPaymentServiceService: StudentPaymentServiceService,
  ) {}

  @MessagePattern({ type: 'ping' })
  ping(request: unknown) {
    return { status: 'success', service: 'student-payment', request };
  }
}
