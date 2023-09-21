import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidatorController } from './validator/validator.controller';
import { ValidatorService } from './validator/validator.service';

@Module({
  imports: [],
  controllers: [AppController, ValidatorController],
  providers: [AppService, ValidatorService],
})
export class AppModule {}
