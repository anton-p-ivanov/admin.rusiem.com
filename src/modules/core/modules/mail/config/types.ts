import type { TDataMediaFile, TDataWorkflow } from 'config/types';

export type TDataMailTemplate = {
  uuid?: string,
  code: string,
  sender: string,
  recipient: string,
  extraHeaders?: string,
  translations: {
    [key: string]: TDataMailTemplateLang
  },
  file?: TDataMediaFile,
  workflow?: TDataWorkflow,
};

export type TDataMailTemplateLang = {
  [key: string]: string;
  locale: string,
  subject: string,
  text: string,
  html: string,
};
