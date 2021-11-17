import React from 'react';

import type { TFormField, TFormFields } from 'components/Form/types';
import type { TElementsForm } from 'views/CollectionView/types';
import type { TListViewColumn, TListViewTemplates } from 'views/ListView/types';

export type TCollectionField = TFormField<Record<string, unknown>[]> & {
  attrs: {
    columns: TListViewColumn[];
    templates: TListViewTemplates;
    form: React.FC<TElementsForm>;
    fields: TFormFields;
  }
};

export type TCollectionProps = {
  field: TCollectionField;
};
