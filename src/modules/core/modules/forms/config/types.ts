import type { TDataEntity } from 'config/types';

export type TDataForm = TDataEntity & {
  slug: string;
  context: string;
  template?: string;
  isPublished: boolean;
  publishedAt: string;
  activeFrom: string;
  activeTo: string;
  statuses: TDataFormStatus[];
};

export type TDataFormStatus = {
  uuid?: string;
  template?: string;
  form?: string;
  name: string;
  type?: string;
  isDefault: boolean;
  translations: {
    [key: string]: TDataFormStatusLang
  },
};

export type TDataFormStatusLang = {
  [key: string]: string | undefined;
  uuid?: string;
  locale?: string,
  status?: string,
  title: string,
};

export type TFormStatusTypes = {
  [key: string]: string;
};

export const FormStatusTypes: TFormStatusTypes = {
  C: 'Новый',
  A: 'Утвержденный',
  R: 'Отклоненный',
};
