import React from 'react';

import { TReducerState } from './store/types';

export type TFormViewEndpoints = {
  submit: string;
  request?: string;
  success?: string;
};

export type TFormViewProps = {
  variant?: string;
  endpoints?: TFormViewEndpoints;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TFormViewReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
};
