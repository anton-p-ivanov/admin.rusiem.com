import { TDataEntity } from 'config/types';

export type TDataVacancy = TDataEntity & {
  description: string;
  content: string;
  slug: string;
  sort: number;
  locale: string;
  isPublished: boolean;
  publishedAt: string;
  group?: TDataVacancyGroup;
};

export type TDataVacancyGroup = {
  uuid?: string;
  title: string;
  description: string;
  slug: string;
  sort: number;
};
