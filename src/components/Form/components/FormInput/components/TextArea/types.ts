import type { TFormField } from 'components/Form/types';

export type TTextAreaAttributes = {
  size?: 'small' | 'medium' | 'large'
};

export type TTextAreaField = TFormField<string> & {
  attrs?: TTextAreaAttributes;
};

export type TTextAreaProps = {
  field: TTextAreaField;
};
