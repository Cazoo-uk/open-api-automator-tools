import { getOpenApiTypescriptPath } from './utils/getDocsPath';
import { convertToTypescript } from './utils/convertToTypescript';

const fs = require('fs');

const yamlsToCheck = process.argv.slice(2);

if (yamlsToCheck.length === 0) {
    console.error('Error: Please define a set of files to check');
    process.exit(1);
}

try {
    for (const yamlToCheck of yamlsToCheck) {
        const existingTypescriptPath = getOpenApiTypescriptPath(yamlToCheck);

        const output = fs.readFileSync(existingTypescriptPath, 'utf-8');
        const openApiOutput = convertToTypescript(yamlToCheck);

        if (output !== openApiOutput) {
            console.error(
                `Please regenerate the open api document (${yamlToCheck}) by using npm run convert:yamlToTypescript`
            );
            process.exit(1);
        }
    }
} catch (e) {
    console.error('There was an error while reading the openapi typescript file');
    console.error(e);
    process.exit(1);
}
