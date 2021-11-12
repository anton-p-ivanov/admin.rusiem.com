import React from 'react';

import type { TReducerState } from './store/types';
import type { TFormFields } from 'components/Form/types';

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
  request: (endpoint: string) => void;
  reset: () => void;
};

export type TFormViewContext = {
  fields: TFormFields;
};
