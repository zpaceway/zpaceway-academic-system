import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { DatabasesModule } from './databases/databases.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [ConfigurationModule, DatabasesModule],
})
export class SharedModule {}
