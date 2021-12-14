import { FormStatusTypes } from '@forms/config/types';
import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select/types';
import type { TFormField, TFormFields } from 'components/Form/types';

const isDefault: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isDefault',
  label: 'По-умолчанию',
  hint: 'Выберите, чтобы присваивать этот статус всем новым откликам на заявки по-умолчанию.',
};

const name: TFormField<string> = {
  name: 'name',
  label: 'Символьный код',
  hint: 'Допускается не более 250 символов из набора [a-z0-9_].',
};

const type: TFormField<string> = {
  type: 'select',
  name: 'type',
  label: 'Тип статуса',
  hint: 'Выберите тип статуса',
  attrs: {
    placeholder: '- Не выбрано -',
    options: Object.entries(FormStatusTypes).map(([value, label]) => ({ value, label })),
  },
};

const template: TFormField<string> = {
  type: 'select',
  name: 'template',
  label: 'Почтовый шаблон',
  hint: 'Шаблон для автоматической отправки результата менеджеру сайта.',
  attrs: {
    placeholder: '- Не выбрано -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/mail/templates/lookup'),
  },
};

const title: TFormField<string> = {
  name: 'title',
  label: 'Название статуса',
  hint: 'Не более 250 символов.',
};

const fields: TFormFields = {
  name,
  type,
  template,
  isDefault,
  title,
};

export default fields;
