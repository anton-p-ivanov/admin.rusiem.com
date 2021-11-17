import React from 'react';

import type { TListViewColumn } from '../ListView/types';
import type { TUseHandlers as TUseFormHandlers } from './components/ElementsForm/types';
import type { TUseHandlers as TUseListHandlers } from './components/ElementsList/types';
import type { TFormFields } from 'components/Form/types';

export type TCollectionViewProps = {
  property: string;
  settings: TCollectionSettings;
};

export type TCollectionViewContext = {
  property: string;
  toggleModal?: (value?: boolean) => void;
};

export type TCollectionViewTemplates = {
  row: React.FC<TElementsListRow>;
  toolbar?: React.FC;
};

export type TCollectionSettings = {
  columns: TListViewColumn[];
  templates: TCollectionViewTemplates;
  form: React.FC<TElementsForm>;
  fields: TFormFields;
};

export type TElementsForm = {
  handlers: TUseFormHandlers,
  fields: TFormFields,
};

export type TElementsListContext = {
  handlers: TUseListHandlers,
};

export type TElementsListRow = {
  data: Record<string, unknown>;
  handlers: TUseListHandlers;
};
