import type { TFormField, TFormFields } from 'components/Form/types';

const username: TFormField<string> = {
  name: 'username',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    placeholder: 'Введите ваш E-Mail',
  },
};

const password: TFormField<string> = {
  name: 'password',
  label: 'Пароль',
  isRequired: true,
  type: 'password',
  attrs: {
    placeholder: 'Введите пароль',
  },
};

const fields: TFormFields = {
  username,
  password,
};

export default fields;
