import type { TDataWorkflow } from 'config/types';

export type TWorkflowCreated = {
  workflow?: TDataWorkflow;
  defaults?: {
    name: string;
    date: string;
  }
};
