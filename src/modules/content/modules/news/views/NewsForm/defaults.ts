import { TDataNews } from '@news/config/types';

const date = new Date();
const defaults: TDataNews = {
  slug: '',
  title: '',
  content: '',
  description: '',
  isPinned: false,
  isPublished: true,
  publishedAt: new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000)).toISOString(),
  locale: 'ru',
  sort: 100,
  meta: [],
};

export default defaults;
