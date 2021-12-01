import React from 'react';

import type { TFormFields } from 'components/Form/types';
import type { TReducerData } from 'views/FormView/store/types';

export type TFilterResponse = {
  [key: string]: {
    value: TReducerData
  }
};

export type TUseHandlers = (param: string) => {
  apply: () => void;
  reset: () => void;
  fetch: () => void;
};

export type TListViewFilterProps = {
  param: string;
  fields: TFormFields;
  renderFields?: (fields: TFormFields) => React.ReactNode;
};
