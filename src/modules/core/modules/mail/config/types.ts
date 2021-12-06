import type { TDataMediaFile, TDataWorkflow } from 'config/types';

export type TDataMailTemplate = {
  uuid: string,
  code: string,
  sender: string,
  recipient: string,
  extraHeaders: Record<string, string>,
  translations: {
    [key: string]: TDataMailTemplateLang
  },
  file?: TDataMediaFile,
  workflow?: TDataWorkflow,
};

export type TDataMailTemplateLang = {
  locale: string,
  subject: string,
  text: string,
  html: string,
};
