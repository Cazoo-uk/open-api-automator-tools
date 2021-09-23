import Ajv from 'ajv';
import { openapiExample } from '../docs/openapiExample';

class ValidationError extends Error {}
export const request = (requestBody: string) => {

    const body = parseJsonString(requestBody);

    const ajv =  new Ajv({
        allErrors: true,
        strict: false
    });

    const validateFunction = ajv.compile(openapiExample.components.schemas.createPersonRequest);

    validateFunction(body);

    if (validateFunction.errors) {
        throw new ValidationError("Invalid payload")
    }
}


const parseJsonString = (jsonString: string): object => {
    try {
        return JSON.parse(jsonString)
    } catch(e) {
        throw e;
    }
}
