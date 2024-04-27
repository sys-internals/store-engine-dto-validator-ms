import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ValidatorService {
    private readonly logger = new Logger(ValidatorService.name);

    validate(payload: any) {
        // const workFlow = this.identifyWorkflow(payload.processCode);
        // switch (workFlow) {
        //     case 1: this.validateProductCreationPayload(payload); break;
        //     default: console.log('not handled');
        // }
        return this.validateProductCreationPayload(payload);
    }

    private identifyWorkflow(code: number) {
        return 1;
    }

    private validateProductCreationPayload(payload: any) {
        this.logger.debug(payload, 'Product validation');
        if (payload.title) {
            this.logger.debug('Product on sale title is valid');
            return { isValid: true };
        } else {
            this.logger.debug('Product on sale title is invalid');
            return { isValid: false };
        }
        // if (payload.product?.enterprise?.name) {
        //     this.logger.debug('Enterprise name is valid.');
        //     return { isValid: true };
        // } else {
        //     this.logger.debug('Enterprise name is invalid.');
        //     return { isValid: false };
        // }
    }

    private validateProductToSaleCreationPayload(payload: any) {
        if (String(payload.sale.product?.enterprise?.name).trim().match('')) {
            throw Error('No enterprise name provided.');
        }
        if (String(payload.sale.product?.name).trim().match('')) {
            throw Error('No product name provided.');
        }
        if (String(payload.sale?.productTitle).trim().match('')) {
            throw Error('No product Title');
        }
        if (String(payload.sale?.productTitle).includes('harmfultext')) {
            throw Error('Harmful product Title warning')
        }
        if (!payload.sale || payload.sale.price < 50) {
            throw Error('Product price warning');
        }
    }
}
