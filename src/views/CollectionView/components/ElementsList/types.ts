import type { TCollectionViewTemplates } from 'views/CollectionView/types';
import type { TListViewColumn } from 'views/ListView/types';

export type TElementsListProps = {
  data: Record<string, unknown>[];
  columns: TListViewColumn[];
  templates: TCollectionViewTemplates;
};

export type TUseHandlers = {
  update: (id: string) => void;
  copy: (id: string) => void;
  delete: (id: string) => void;
};
