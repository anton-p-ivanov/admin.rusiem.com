import sharedFields from 'config/fields';
import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select/types';
import type { TFormField, TFormFields } from 'components/Form/types';

const activeFrom: TFormField<string> = {
  type: 'datetime',
  name: 'activeFrom',
  label: 'Дата начала активности',
  hint: 'Дата, начиная с которой веб-форма доступна для заполнения.',
};

const activeTo: TFormField<string> = {
  type: 'datetime',
  name: 'activeTo',
  label: 'Дата конца активности',
  hint: 'Дата, до которой веб-форма доступна для заполнения. Значение должно быть больше, чем дата начала активности.',
};

const template: TFormField<string> = {
  type: 'select',
  name: 'template',
  label: 'Почтовый шаблон',
  hint: 'Шаблон для автоматической отправки результата менеджеру сайта.',
  attrs: {
    placeholder: '- Выберите шаблон -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/mail/templates/lookup'),
  },
};

const context: TFormField<string> = {
  type: 'select',
  name: 'context',
  label: 'Контекст',
  hint: 'Привязка элемента к одному из контекстов.',
  attrs: {
    placeholder: '- Выберите контекст -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/context/lookup'),
  },
};

const fields: TFormFields = {
  title: sharedFields.title,
  slug: sharedFields.slug,
  publishedAt: sharedFields.publishedAt,
  isPublished: sharedFields.isPublished,
  sites: sharedFields.sites,
  activeFrom,
  activeTo,
  template,
  context,
};

export default fields;
