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

export type TDataMeta = {
  uuid: string;
  property: string;
  name: string;
  content: string;
};
