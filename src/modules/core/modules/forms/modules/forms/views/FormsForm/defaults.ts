import { TDataForm } from '../../config/types';

const now = new Date();
const date = new Date(now.getTime() - (now.getTimezoneOffset() * 60 * 1000)).toISOString();
const defaults: TDataForm = {
  activeFrom: date,
  activeTo: '',
  context: 'default',
  slug: 'novaya-forma',
  title: 'Новая форма',
  isPublished: true,
  publishedAt: date,
  template: '',
};

export default defaults;
