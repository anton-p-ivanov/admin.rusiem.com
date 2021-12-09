import React from 'react';

import type { TFormFields } from 'components/Form/types';
import type { TLookupResult } from 'config/types';

export type TLocaleViewProps = {
  fields: TFormFields;
  template?: (fields: TFormFields) => React.ReactNode
};

export type TLocaleViewFields = {
  [key: string]: TFormFields
};

export type TUseFields = (locales: TLookupResult[], fields: TFormFields) => TLocaleViewFields;
