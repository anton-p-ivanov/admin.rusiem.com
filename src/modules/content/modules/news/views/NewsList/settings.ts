import type { TDataViewColumn, TDataViewTemplates } from 'views/DataView/types';
// import * as Children from './components';

const columns: TDataViewColumn[] = [
  { name: 'title', title: 'Название' },
  { name: 'publishedAt', title: 'Дата публ.' },
  { name: 'locale', title: 'Локаль' },
  { name: 'isPublished', title: 'Опубл.' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', title: '' },
];

const templates: TDataViewTemplates = {
  // row: Children.NewsListRow,
  // toolbar: Children.NewsListToolbar,
};

export default {
  columns,
  templates,
};
