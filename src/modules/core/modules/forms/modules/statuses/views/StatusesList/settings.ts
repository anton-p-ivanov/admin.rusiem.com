import { StatusesListRow, StatusesListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'title', title: 'Название' },
  { name: 'name', title: 'Символьный код' },
  { name: 'isDefault', title: 'Умолч.' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: StatusesListRow,
  toolbar: StatusesListToolbar,
};

export default {
  columns,
  templates,
};
