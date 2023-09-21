import { Body, Controller, Post } from '@nestjs/common';
import { ValidatorService } from './validator.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ValidatorController {
    constructor(private readonly validatorService: ValidatorService) {}

    @Post()
    validatePayload(@Body() payload: any) {
        return this.validatorService.validate(payload);
    }

    @EventPattern('create_product')
    handleProduct(payload: any) {
        return this.validatorService.validate(payload);
    }
}
