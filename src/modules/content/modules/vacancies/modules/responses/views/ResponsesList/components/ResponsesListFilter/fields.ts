import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select';
import type { TFormField, TFormFields } from 'components/Form/types';

const search: TFormField<string> = {
  name: 'search',
  label: 'Поиск',
  hint: 'Введите имя кандидата, его E-Mail или телефон',
};

const publishedAt: TFormField<string> = {
  type: 'date',
  name: 'publishedAt',
  label: 'Дата размещения',
};

const vacancy: TFormField<string> = {
  type: 'select',
  name: 'vacancy',
  label: 'Вакансия',
  hint: 'Выберите вакансию, отклики на которую необходимо показать',
  attrs: {
    placeholder: '- Любая вакансия -',
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/vacancies/lookup'),
  },
};

const fields: TFormFields = {
  search,
  publishedAt,
  vacancy,
};

export default fields;
