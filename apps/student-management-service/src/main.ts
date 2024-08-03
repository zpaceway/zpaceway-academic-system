import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { StudentManagementServiceModule } from './student-management-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    StudentManagementServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.STUDENT_MANAGEMENT_HOST,
        port: parseInt(process.env.STUDENT_MANAGEMENT_PORT),
      },
    },
  );
  app.listen();
}
bootstrap();
