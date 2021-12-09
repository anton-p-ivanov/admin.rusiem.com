import { TemplatesListRow, TemplatesListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'subject', title: 'Тема' },
  { name: 'code', title: 'Симв. код' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: TemplatesListRow,
  toolbar: TemplatesListToolbar,
};

export default {
  columns,
  templates,
};
