import components from './components';
import fields from './fields';

import type { TCollectionSettings } from 'views/CollectionView/types';
import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

const columns: TListViewColumn[] = [
  { title: 'Мета-тег', name: 'property' },
  { title: '', name: 'context' },
];

const templates: TListViewTemplates = {
  row: components.Row,
  toolbar: components.Toolbar,
};

const settings: TCollectionSettings = {
  columns,
  templates,
  fields,
  form: components.Form,
};

export default settings;
