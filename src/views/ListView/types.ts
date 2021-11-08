import type { TDataViewColumn, TDataViewTemplates } from 'views/DataView/types';

import type { TReducerState } from './store/types';

export type TListViewProps = {
  endpoint: string;
  templates: TListViewTemplates;
  columns: TListViewColumn[];
};

export type TListViewColumn = TDataViewColumn;
export type TListViewTemplates = TDataViewTemplates;

export type TListViewReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  request: (params: TListViewRequestConfig) => void;
  refresh: () => void;
};

export type TListViewRequestConfig = {
  endpoint: string;
  page: number;
  size: number;
};

export type TListViewPagination = {
  page: number;
  size: number;
  total: number;
};

export type TListViewSort = {
  sortBy: string;
  sortOrder: string;
};
