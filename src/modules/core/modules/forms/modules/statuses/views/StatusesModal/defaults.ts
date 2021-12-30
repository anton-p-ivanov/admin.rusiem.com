import { TDataFormStatus } from '@forms/config/types';

const defaults: TDataFormStatus = {
  name: 'noviy-status',
  isDefault: false,
  translations: {
    ru: { title: 'Новый статус', locale: 'ru' },
    en: { title: 'New status', locale: 'en' },
  },
};

export default defaults;
