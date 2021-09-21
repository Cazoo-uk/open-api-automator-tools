import { getOpenApiPath } from './getDocsPath';
import { runAndWait } from '../../commandRunners';

export const extractOpenApiSchemaToTypescript = async (yamlToExtract: string, outputPath: string): Promise<void> => {
    const openApiDoc = `${getOpenApiPath(yamlToExtract)}`;
    await runAndWait(`openapi-typescript ${openApiDoc}.yml --output ${outputPath} --prettier-config`);
};
