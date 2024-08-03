import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('STUDENT_MANAGEMENT')
    private readonly studentManagement: ClientProxy,
    @Inject('STUDENT_PAYMENT')
    private readonly studentPayment: ClientProxy,
    @Inject('COURSE_REGISTRATION')
    private readonly courseRegistration: ClientProxy,
    @Inject('COURSE_MANAGEMENT')
    private readonly courseManagement: ClientProxy,
  ) {}

  @Get()
  home() {
    return 'Welcome to API Gateway';
  }

  @Post('student-management-service/:type')
  studentManagementService(
    @Body() body: unknown,
    @Param() params: { type: string },
  ) {
    return this.studentManagement.send<string>({ type: params.type }, body);
  }

  @Post('student-payment-service/:type')
  studentPaymentService(
    @Body() body: unknown,
    @Param() params: { type: string },
  ) {
    return this.studentPayment.send<string>({ type: params.type }, body);
  }

  @Post('course-registration-service/:type')
  courseRegistrationService(
    @Body() body: unknown,
    @Param() params: { type: string },
  ) {
    return this.courseRegistration.send<string>({ type: params.type }, body);
  }

  @Post('course-management-service/:type')
  courseManagementService(
    @Body() body: unknown,
    @Param() params: { type: string },
  ) {
    return this.courseManagement.send<string>({ type: params.type }, body);
  }
}
