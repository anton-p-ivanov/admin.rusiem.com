import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select';
import type { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Введите название веб-формы или его часть',
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
  hint: 'Выберите сайт, на котором опубликована веб-форма',
  defaultValue: '',
  attrs: {
    placeholder: '- Любой сайт -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/sites'),
  },
};

const isPublished: TFormField<string> = {
  type: 'choices',
  name: 'isPublished',
  label: 'Показывать опубликованные веб-формы',
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
  isPublished,
};

export default fields;
