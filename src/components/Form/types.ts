import React from 'react';

import FormField from './components/FormField';
import FormGroup from './components/FormGroup';
import FormActions from './components/FormActions';

import type { TFormField, TFormFields } from './components/FormField';

type TFormProps = {
  variant?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TForm = React.FC<TFormProps> & {
  Field: typeof FormField;
  Group: typeof FormGroup;
  Actions: typeof FormActions;
};

export type { TFormField, TFormFields };
