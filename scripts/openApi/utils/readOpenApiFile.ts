import fs from 'fs';
import { getOpenApiPath } from './getDocsPath';

const yaml = require('js-yaml');

export const readOpenApiFile = (fileToRead: string) => {
    const openApiPath = getOpenApiPath(fileToRead + '.yml');
    const fileData = fs.readFileSync(openApiPath, 'utf8');
    return yaml.load(fileData);
};
