import { readOpenApiFile } from './readOpenApiFile';

export const convertToTypescript = (ymlToRead: string) => {
    const data = readOpenApiFile(ymlToRead);

    return `export const ${ymlToRead} = ${JSON.stringify(data)};`;
};
