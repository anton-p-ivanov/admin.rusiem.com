import { NewsListRow, NewsListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'title', title: 'Название' },
  { name: 'publishedAt', title: 'Дата публ.' },
  { name: 'locale', title: 'Локаль' },
  { name: 'isPublished', title: 'Опубл.' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: NewsListRow,
  toolbar: NewsListToolbar,
};

export default {
  columns,
  templates,
};
