import type { TFormField } from 'components/Form/types';

export type TSelectField = TFormField<string | string[]> & {
  attrs?: {
    options: TSelectOptions,
    placeholder?: string,
    isMultiple?: boolean,
    size?: number,
  }
};

export type TSelectProps = {
  field: TSelectField;
};

export type TSelectOptions = TSelectOption[];

export type TSelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};
