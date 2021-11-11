import { Reducer } from 'react';

import type { TListViewPagination, TListViewSort } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TReducerData = any;

export type TReducerStatus =
  | 'WAITING'
  | 'FETCHING'
  | 'FETCH_SUCCEED'
  | 'FETCH_FAILED';

export type TReducerState = {
  status: TReducerStatus;
  data: TReducerData[];
  pagination: TListViewPagination;
  sort: TListViewSort;
  isFiltered: boolean;
  timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducer = Reducer<TReducerState, TReducerAction>;
