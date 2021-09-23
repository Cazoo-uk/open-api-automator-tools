const yaml = require('js-yaml');
const fs = require('fs');

try {
    const openapiTsPath = "docs/openapiExample.ts"
    const openapiPath = "docs/openapiExample.yml"

    const currentOutput = fs.readFileSync(openapiTsPath, 'utf8');

    const fileData = fs.readFileSync(openapiPath, 'utf8');
    const yamlData = yaml.load(fileData);

    const output = `export const openapiExample = ${JSON.stringify(yamlData)}`;
    if (output !== currentOutput) {
        console.error(
            `Please regenerate the open api document`
        );
        process.exit(1);
    }
} catch (e) {
    console.error('There was an error while reading the openapi typescript file');
    console.error(e);
    process.exit(1);
}
