import { TDataVacancy } from '@vacancies/config/types';

const date = new Date();
const defaults: TDataVacancy = {
  slug: '',
  title: '',
  content: '',
  description: '',
  isPublished: true,
  publishedAt: new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000)).toISOString(),
  locale: 'ru',
  sort: 100,
};

export default defaults;
