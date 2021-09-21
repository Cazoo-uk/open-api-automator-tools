import path from 'path';

export const getOpenApiPath = (fileToRead: string): string => {
    return path.join(getDocsPath(), fileToRead);
};

export const getDocsPath = (): string => {
    return path.join(getRootPath(), 'docs');
};

export const getOpenApiTypescriptPath = (fileName: string): string => {
    return path.join(getDocsPath(), `${fileName}.ts`);
};

export const getRootPath = (): string => {
    return path.join(__dirname, '..', '..', '..');
};
