import type { TFormField } from 'components/Form/types';

export type TTextField = TFormField<string> & {
  attrs?: {
    placeholder?: string
  }
};

export type TTextProps = {
  field: TTextField;
};
