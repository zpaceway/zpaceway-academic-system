import { NestFactory } from '@nestjs/core';
import { StudentPaymentServiceModule } from './student-payment-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    StudentPaymentServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.STUDENT_PAYMENT_HOST,
        port: parseInt(process.env.STUDENT_PAYMENT_PORT),
      },
    },
  );
  app.listen();
}
bootstrap();
