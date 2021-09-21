import * as fs from 'fs';
import path from 'path';
import { runAndWait } from '../commandRunners';
import { convertToTypescript } from './utils/convertToTypescript';
import { getOpenApiTypescriptPath, getRootPath } from './utils/getDocsPath';
import { extractOpenApiSchemaToTypescript } from './utils/extractOpenApiSchemaToTypescript';

const yamlsToConvert = process.argv.slice(2);

if (yamlsToConvert.length === 0) {
    console.error('Please define a set of files to convert');
    process.exit(1);
}

(async function () {
    try {
        for (const yamlToConvert of yamlsToConvert) {
            const fileData = convertToTypescript(yamlToConvert);
            const fileToWritePath = getOpenApiTypescriptPath(yamlToConvert);

            fs.writeFileSync(fileToWritePath, fileData);

            const openApiTypescriptPath = path.join(getRootPath(), 'types', 'openApiSchema', 'openApiSchema.ts');

            await extractOpenApiSchemaToTypescript(yamlToConvert, openApiTypescriptPath);

            try {
                await runAndWait(`eslint ${openApiTypescriptPath} --fix --no-ignore`);
            } catch (e) {
                console.log(
                    'We are ignoring eslint errors from openapi conversion because the library is exporting an empty external module https://github.com/drwpow/openapi-typescript/issues/699'
                );
                console.log(e);
            }
        }
    } catch (e) {
        console.log(e);
    }
})();
