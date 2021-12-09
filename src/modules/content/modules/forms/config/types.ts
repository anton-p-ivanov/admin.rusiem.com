import type { TDataEntity } from 'config/types';

export type TDataForm = TDataEntity & {
  slug: string;
  context: string;
  template: string;
  isPublished: boolean;
  publishedAt: string;
  activeFrom: string;
  activeTo: string;
};
