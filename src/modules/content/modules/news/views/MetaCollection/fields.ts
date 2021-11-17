import type { TFormField, TFormFields } from 'components/Form/types';

const property: TFormField<string> = {
  name: 'property',
  label: 'Свойство',
  type: 'select',
  defaultValue: 'name',
  attrs: {
    options: [
      { value: 'name', label: 'name' },
      { value: 'charset', label: 'charset' },
      { value: 'http-equiv', label: 'http-equiv' },
    ],
  },
};

const name: TFormField<string> = {
  name: 'name',
  label: 'Название свойства',
};

const content: TFormField<string> = {
  name: 'content',
  label: 'Значение',
};

const fields: TFormFields = {
  property,
  name,
  content,
};

export default fields;
