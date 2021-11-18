import { Reducer } from 'react';

export type TReducerData = {
  // [key: string]:
  //   | string
  //   | string[]
  //   | boolean
  //   | number
  //   | Record<string, unknown>
  //   | Record<string, unknown>[]
  //   | TDataWorkflow;
  [key: string]: unknown;
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

export type TReducer = Reducer<TReducerState, TReducerAction>;
