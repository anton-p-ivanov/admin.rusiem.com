import type { TFormField } from 'components/Form/types';

export type TChoice = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type TChoiceFieldAttributes = {
  choices: TChoice[],
  choicesCallback?: () => Promise<TChoice[]>;
  placeholder?: string,
  isMultiple?: boolean,
  isInline?: boolean,
};

export type TChoiceField = TFormField<string | string[]> & {
  attrs?: TChoiceFieldAttributes
};

export type TChoicesProps = {
  field: TChoiceField;
};
