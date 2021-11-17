import React from 'react';

import type { TListViewColumn, TListViewTemplates } from '../ListView/types';
import type { TUseHandlers } from './components/ElementsForm/types';
import type { TFormFields } from 'components/Form/types';

export type TCollectionViewProps = {
  property: string;
  settings: TCollectionSettings;
};

export type TCollectionSettings = {
  columns: TListViewColumn[];
  templates: TListViewTemplates;
  form: React.FC<TElementsForm>;
  fields: TFormFields;
};

export type TElementsForm = {
  handlers: TUseHandlers,
  fields: TFormFields,
};
