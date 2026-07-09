import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {validate} from "class-validator";
import {plainToClass} from 'class-transformer';
import {ValidationExceptions} from "../exceptions/validation.exceptions";

export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const {metatype} = metadata;
        if (!metatype) {
            return value
        }

        const obj = plainToClass(metatype, value)

        const errors = await validate(obj)

        if (errors.length > 0) {
            const message = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints ?? {}).join(', ')}`
            })

            return new ValidationExceptions(message)
        }

        return obj;
    }

}
