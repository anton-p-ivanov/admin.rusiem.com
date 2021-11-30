import React from 'react';

import type { TReducerData, TReducerState } from './store/types';

export type TFormViewEndpoints = {
  submit?: string;
  request?: string;
  success?: string;
};

export type TFormViewProps = {
  variant?: string;
  endpoints?: TFormViewEndpoints;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onSubmitSucceed?: (data: TReducerData) => void;
};

export type TFormViewReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  request: (endpoint: string) => void;
  reset: () => void;
  submit: (endpoint: string, data: TReducerData) => Promise<TReducerData>;
};

export type TUseHandlers = (props: TFormViewProps) => {
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
};
