import { Reducer } from 'react';

export type TReducerData = {
  [key: string]: string;
  username: string;
  password: string;
};

export type TAuthResponse = {
  token: string;
};

export type TReducerErrors = {
  [key: string]: string[];
};

export type TReducerStatus =
  | 'WAITING'
  | 'SUBMITTING'
  | 'SUBMIT_SUCCEED'
  | 'SUBMIT_FAILED'
  | 'VALIDATION_FAILED';

export type TReducerState = {
  status: TReducerStatus;
  errors: TReducerErrors;
  data: TReducerData;
  timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducer = Reducer<TReducerState, TReducerAction>;
