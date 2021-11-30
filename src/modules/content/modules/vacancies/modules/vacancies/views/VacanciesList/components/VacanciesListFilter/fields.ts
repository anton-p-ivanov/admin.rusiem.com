import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select';
import type { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Введите название вакансии или его часть',
  defaultValue: '',
};

const publishedAt: TFormField<string> = {
  type: 'date',
  name: 'publishedAt',
  label: 'Дата публикации',
  defaultValue: '',
};

const site: TFormField<string> = {
  type: 'select',
  name: 'site',
  label: 'Сайт',
  hint: 'Выберите сайт, на котором опубликована вакансия',
  defaultValue: '',
  attrs: {
    placeholder: '- Любой сайт -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/sites'),
  },
};

const locale: TFormField<string> = {
  type: 'select',
  name: 'locale',
  label: 'Язык',
  hint: 'Выберите язык, на котором написана вакансия',
  defaultValue: '',
  attrs: {
    placeholder: '- Любой язык -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/locales'),
  },
};

const isPublished: TFormField<string> = {
  type: 'choices',
  name: 'isPublished',
  label: 'Показывать опубликованные вакансии',
  defaultValue: 'false',
  attrs: {
    isInline: true,
    choices: [
      { value: '', label: 'Все' },
      { value: 'true', label: 'Да' },
      { value: 'false', label: 'Нет' },
    ],
  },
};

const fields: TFormFields = {
  title,
  publishedAt,
  site,
  locale,
  isPublished,
};

export default fields;
