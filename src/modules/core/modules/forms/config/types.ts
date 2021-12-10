import type { TDataEntity } from 'config/types';

export type TDataForm = TDataEntity & {
  slug: string;
  context: string;
  template?: string;
  isPublished: boolean;
  publishedAt: string;
  activeFrom: string;
  activeTo: string;
};

export type TDataFormStatus = {
  uuid?: string;
  template?: string;
  form?: string;
  name: string;
  type: string;
  isDefault: boolean;
  translations: {
    [key: string]: TDataFormStatusLang
  },
};

export type TDataFormStatusLang = {
  [key: string]: string;
  uuid: string;
  locale: string,
  status: string,
  title: string,
};
