import { TDataWorkflow } from 'config/types';

export type TDataVacancy = {
  uuid?: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  sort: number;
  locale: string;
  isPublished: boolean;
  publishedAt: string;
  group?: TDataVacancyGroup;
  workflow?: TDataWorkflow;
};

export type TDataVacancyGroup = {
  uuid?: string;
  title: string;
  description: string;
  slug: string;
  sort: number;
};
