import { ResponsesListRow, ResponsesListToolbar } from './components';

import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { name: 'vacancy', title: 'Вакансия' },
  { name: 'fullName', title: 'Кандидат' },
  { name: 'email', title: 'E-Mail' },
  { name: 'phone', title: 'Телефон' },
  { name: 'updatedAt', title: 'Дата размещения' },
  { name: 'context', title: '' },
];

const templates: TListViewTemplates = {
  row: ResponsesListRow,
  toolbar: ResponsesListToolbar,
};

export default {
  columns,
  templates,
};
