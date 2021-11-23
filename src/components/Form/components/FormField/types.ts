import React from 'react';

export type TFormFieldValue = unknown;

export type TFormFieldType =
  | 'checkbox'
  | 'choices'
  | 'collection'
  | 'date'
  | 'datetime'
  | 'file'
  | 'number'
  | 'password'
  | 'select'
  | 'text'
  | 'textarea';

export interface TFormField<T extends TFormFieldValue> {
  name: string;
  label?: string;
  hint?: string;
  type?: TFormFieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: T;
  defaultValue?: T;
  emptyValue?: T;
  errors?: string[];
  onChange?: (value: T) => void;
  ref?: React.RefObject<HTMLInputElement>;
  attrs?: Record<string, unknown>;
}

export type TFormFieldsUnion =
  | TFormField<string>
  | TFormField<string[]>
  | TFormField<boolean>
  | TFormField<number>
  | TFormField<Record<string, unknown>>
  | TFormField<Record<string, unknown>[]>;

export type TFormFields = {
  [key: string]: TFormFieldsUnion;
};

export type TFormFieldProps = {
  field: TFormFieldsUnion;
  variant?: 'horizontal' | 'default';
};
