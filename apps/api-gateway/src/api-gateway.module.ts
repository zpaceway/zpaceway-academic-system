import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/shared';

@Module({
  imports: [
    SharedModule,
    ClientsModule.register([
      {
        name: 'STUDENT_MANAGEMENT',
        transport: Transport.TCP,
        options: {
          host: process.env.STUDENT_MANAGEMENT_HOST,
          port: parseInt(process.env.STUDENT_MANAGEMENT_PORT),
        },
      },
      {
        name: 'STUDENT_PAYMENT',
        transport: Transport.TCP,
        options: {
          host: process.env.STUDENT_PAYMENT_HOST,
          port: parseInt(process.env.STUDENT_PAYMENT_PORT),
        },
      },
      {
        name: 'COURSE_REGISTRATION',
        transport: Transport.TCP,
        options: {
          host: process.env.COURSE_REGISTRATION_HOST,
          port: parseInt(process.env.COURSE_REGISTRATION_PORT),
        },
      },
      {
        name: 'COURSE_MANAGEMENT',
        transport: Transport.TCP,
        options: {
          host: process.env.COURSE_MANAGEMENT_HOST,
          port: parseInt(process.env.COURSE_MANAGEMENT_PORT),
        },
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
