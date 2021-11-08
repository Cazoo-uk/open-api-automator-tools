import path from 'path';

export const getOpenApiPath = (fileToRead: string): string => {
    return path.join(getDocsPath(), fileToRead);
};

export const getDocsPath = (): string => {
    return path.join(getRootPath(), 'docs');
};

export const getRootPath = (): string => {
    return path.join(__dirname, '..', '..', '..');
};
