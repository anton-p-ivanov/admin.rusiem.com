import type { TFormField } from 'components/Form/types';

export type TChoice = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type TChoices = TChoice[];

export type TChoiceFieldAttributes = {
  choices: TChoices,
  choicesCallback?: () => Promise<TChoices>;
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
