import React from 'react';

import type { TReducerData, TReducerState } from './store/types';
import type { TDataColumn } from 'components/DataTable/types';

export type TListViewProps = {
  endpoint: string;
  templates: TListViewTemplates;
  columns: TListViewColumn[];
};

export type TListViewData = TReducerData;

export type TListViewRow = {
  data: TListViewData;
};

export type TListViewColumn = TDataColumn;
export type TListViewTemplates = {
  row: React.FC<TListViewRow>;
  toolbar: React.FC;
};

export type TListViewReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  refresh: () => void;
  request: (params: TListViewRequestConfig) => void;
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
  [key: string]: string;
  sortBy: string;
  sortOrder: string;
};
