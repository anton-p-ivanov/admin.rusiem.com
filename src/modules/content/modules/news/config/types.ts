import { TDataWorkflow } from 'config/types';

export type TDataNews = {
  uuid: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  sort: number;
  locale: string;
  isPublished: boolean;
  isPinned: boolean;
  publishedAt: string;
  workflow: TDataWorkflow;
};
