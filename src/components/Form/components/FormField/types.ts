import React from 'react';

export type TFormFieldValue = string | string[] | boolean | number;
export type TFormFieldType =
  | 'choices'
  | 'date'
  | 'password'
  | 'select'
  | 'text';

export interface TFormField<T extends TFormFieldValue> {
  name: string;
  label?: string;
  hint?: string;
  type?: TFormFieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: T;
  defaultValue?: T;
  errors?: string[];
  onChange?: (value: T) => void;
  ref?: React.RefObject<HTMLInputElement>;
  attrs?: Record<string, unknown>;
}

export type TFormFieldsUnion =
  | TFormField<string>
  | TFormField<string[]>
  | TFormField<boolean>
  | TFormField<number>;

export type TFormFields = {
  [key: string]: TFormFieldsUnion
};

export type TFormFieldProps = {
  field: TFormFieldsUnion;
  variant?: 'horizontal' | 'default';
};
