import sharedFields from 'config/fields';
import API from 'utils/api';

import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select/types';
import type { TFormField, TFormFields } from 'components/Form/types';

const group: TFormField<string> = {
  type: 'select',
  name: 'group',
  label: 'Группа вакансий',
  hint: 'Установите привязку к группе вакансий.',
  attrs: {
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/vacancies/groups'),
  },
};

const fields: TFormFields = {
  title: sharedFields.title,
  slug: sharedFields.slug,
  description: sharedFields.description,
  content: sharedFields.content,
  sort: sharedFields.sort,
  publishedAt: sharedFields.publishedAt,
  isPublished: sharedFields.isPublished,
  sites: sharedFields.sites,
  locale: sharedFields.locale,
  group,
};

export default fields;
