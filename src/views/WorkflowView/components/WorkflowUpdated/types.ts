import type { TDataWorkflow } from 'config/types';

export type TWorkflowUpdated = {
  workflow?: TDataWorkflow;
  defaults?: {
    name: string;
    date: string;
  }
};
