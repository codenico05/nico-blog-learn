import { createClient } from '@sanity/client';

const projectId: string =
  '333hqkid';
const dataSet: string =
  'production';
const apiVersion =
  '2023-01-01';

export const client =
  createClient({
    projectId,
    dataset: dataSet,
    apiVersion,
    useCdn: true,
  });
