import React from 'react';

export type TElementsFormState = {
  [key: string]: string;
};

export type TElementsFormContext = {
  state: TElementsFormState;
  update: (state: TElementsFormState) => void;
};

export type TUseHandlers = {
  close: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
