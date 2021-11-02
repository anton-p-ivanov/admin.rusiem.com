import type { TFormField, TFormFields } from 'components/Form';
import { TFormFieldValue } from '../../../../components/Form/components/FormField/types';

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
  username: username as TFormField<TFormFieldValue>,
  password: password as TFormField<TFormFieldValue>,
};

export default fields;
