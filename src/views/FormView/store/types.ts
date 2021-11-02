import { Reducer } from 'react';

export type TReducerData = {
  [key: string]: string | string[] | boolean | number;
};

export type TReducerErrors = {
  [key: string]: string[];
};

export type TReducerStatus =
  | 'WAITING'
  | 'FETCHING'
  | 'FETCH_SUCCEED'
  | 'FETCH_FAILED'
  | 'SUBMITTING'
  | 'SUBMIT_SUCCEED'
  | 'SUBMIT_FAILED';

export type TReducer = Reducer<TReducerState, TReducerAction>;

export type TReducerState = {
  status: TReducerStatus;
  errors: TReducerErrors;
  data: TReducerData;
  isUpdated: boolean;
  timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};
