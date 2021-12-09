import type { TFormField, TFormFields } from 'components/Form/types';

const search: TFormField<string> = {
  name: 'search',
  label: 'Поиск',
  hint: 'Введите название или символьный код шаблона',
};

const fields: TFormFields = {
  search,
};

export default fields;
