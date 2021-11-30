import React from 'react';

import type { TFormFields } from 'components/Form/types';
import type { TElementsForm } from 'views/CollectionView/types';

export type TElementsFormProps = {
  component: React.FC<TElementsForm>;
  fields: TFormFields;
};

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
