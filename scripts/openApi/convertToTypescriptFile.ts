import * as fs from 'fs';
const yaml = require('js-yaml');

(async function () {
    try {
        const fileData = fs.readFileSync("docs/openapiExample.yml", 'utf8');
        const yamlData = yaml.load(fileData);

        const typescriptConst = `export const openapiExample = ${JSON.stringify(yamlData)}`;
        fs.writeFileSync("docs/openapiExample.ts", typescriptConst);
    } catch (e) {
        console.log(e);
    }
})();
