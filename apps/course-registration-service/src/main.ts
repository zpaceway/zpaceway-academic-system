import { NestFactory } from '@nestjs/core';
import { CourseRegistrationServiceModule } from './course-registration-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    CourseRegistrationServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.COURSE_REGISTRATION_HOST,
        port: parseInt(process.env.COURSE_REGISTRATION_PORT),
      },
    },
  );
  app.listen();
}
bootstrap();
