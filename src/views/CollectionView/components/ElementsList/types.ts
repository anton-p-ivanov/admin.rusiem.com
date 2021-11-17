import { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

export type TElementsListProps = {
  data: Record<string, unknown>[];
  columns: TListViewColumn[];
  templates: TListViewTemplates;
};
