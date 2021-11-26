import type { TFormField, TFormFields } from 'components/Form/types';

const keywords: TFormField<string> = {
  name: 'keywords',
  label: 'Ключевые слова',
  hint: 'Список ключевых слов через разделитель для мета-тега keywords.',
};

const description: TFormField<string> = {
  name: 'description',
  label: 'Описание',
  type: 'textarea',
  hint: 'Описание для мета-тега description.',
};

const title: TFormField<string> = {
  name: 'title',
  label: 'Заголовок окна браузера',
  hint: 'Заголовок для тега title.',
};

const fields: TFormFields = {
  keywords,
  description,
  title,
};

export default fields;
