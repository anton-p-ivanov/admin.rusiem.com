import { GroupsListRow, GroupsListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'title', title: 'Название' },
  { name: 'sort', title: 'Сорт.' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: GroupsListRow,
  toolbar: GroupsListToolbar,
};

export default {
  columns,
  templates,
};
