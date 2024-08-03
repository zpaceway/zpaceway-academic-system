import { Module } from '@nestjs/common';
import { StudentPaymentServiceController } from './student-payment-service.controller';
import { StudentPaymentServiceService } from './student-payment-service.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [StudentPaymentServiceController],
  providers: [StudentPaymentServiceService],
})
export class StudentPaymentServiceModule {}
