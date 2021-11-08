import Ajv from 'ajv';
import { openapiExample } from '../docs/openapiExample';
import { components } from '../types/openapiSchema/openapiExample';

class ValidationError extends Error {}
export const request = (requestBody: components['schemas']['createPersonRequest']): void => {
    const ajv = new Ajv({
        allErrors: true
    });

    const validateFunction = ajv.compile(openapiExample.components.schemas.createPersonRequest);

    validateFunction(requestBody);

    if (validateFunction.errors) {
        throw new ValidationError('Invalid payload');
    }
};
