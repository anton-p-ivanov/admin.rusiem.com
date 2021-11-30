import type { TFormField } from 'components/Form/types';

export type TCheckboxProps = {
  field: TFormField<boolean> & {
    isSelected?: boolean;
  };
};
