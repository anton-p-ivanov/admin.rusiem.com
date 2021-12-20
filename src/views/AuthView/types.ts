import type { TAuthResponse, TReducerState } from './store/types';

export type TAuthViewReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
  submit: () => Promise<TAuthResponse>;
};

export type TAuthViewProps = {
  setToken: (token: string) => void;
};
