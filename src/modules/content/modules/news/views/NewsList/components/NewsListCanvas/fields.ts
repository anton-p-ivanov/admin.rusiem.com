import { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Введите название новости или его часть',
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
  hint: 'Выберите сайт, на котором опубликована новость',
  defaultValue: '',
};

const locale: TFormField<string> = {
  type: 'select',
  name: 'locale',
  label: 'Язык',
  hint: 'Выберите язык, на котором написана новость',
  defaultValue: '',
  attrs: {
    options: [
      { value: '', label: 'Любой язык' },
      { value: 'RU', label: 'Russian' },
      { value: 'EN', label: 'English' },
    ],
  },
};

const isPublished: TFormField<string> = {
  type: 'choices',
  name: 'isPublished',
  label: 'Показывать опубликованные новости',
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
