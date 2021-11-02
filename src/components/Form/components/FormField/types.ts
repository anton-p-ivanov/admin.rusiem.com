import React from 'react';

export type TFormFieldValue = string | string[] | boolean | number;
export type TFormFieldType =
  | 'text'
  | 'password';

export interface TFormField<T extends TFormFieldValue> {
  name: string;
  label: string;
  hint?: string;
  type?: TFormFieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: T;
  defaultValue?: T;
  errors?: string[];
  onChange?: (value: T) => void;
  ref?: React.RefObject<HTMLInputElement>;
  attrs?: Record<string, string>;
}

export type TFormFields = {
  [key: string]: TFormField<TFormFieldValue>
  // | TFormField<string>
  // | TFormField<string[]>
  // | TFormField<boolean>
  // | TFormField<number>
};

export type TFormFieldProps = {
  field: TFormField<TFormFieldValue>;
  variant?: 'horizontal' | 'default';
};
