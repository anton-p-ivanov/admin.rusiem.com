import type { TFormField } from 'components/Form/types';

export type TSelectFieldAttributes = {
  options?: TSelectOptions,
  optionsCallback?: () => Promise<TSelectOptions>;
  placeholder?: string,
  isMultiple?: boolean,
  size?: number,
};

export type TSelectField = TFormField<string | string[]> & {
  attrs?: TSelectFieldAttributes
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
