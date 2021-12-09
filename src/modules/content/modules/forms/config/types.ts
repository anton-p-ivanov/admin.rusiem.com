import type { TDataEntity } from 'config/types';

export type TDataArticle = TDataEntity & {
  description: string;
  content: string;
  slug: string;
  sort: number;
  locale: string;
  isPublished: boolean;
  isPinned: boolean;
  publishedAt: string;
  meta: TDataMeta[];
};

export type TDataMeta = {
  uuid: string;
  property: string;
  name: string;
  content: string;
};
