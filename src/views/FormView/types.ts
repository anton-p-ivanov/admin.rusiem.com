import React from 'react';

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
