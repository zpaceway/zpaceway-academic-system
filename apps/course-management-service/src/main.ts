import { NestFactory } from '@nestjs/core';
import { CourseManagementServiceModule } from './course-management-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    CourseManagementServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.COURSE_MANAGEMENT_HOST,
        port: parseInt(process.env.COURSE_MANAGEMENT_PORT),
      },
    },
  );
  app.listen();
}
bootstrap();
