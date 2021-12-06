import { TTextField } from 'components/Form/components/FormInput/components/Text/types';

export type TSlugField = TTextField & {
  attrs: {
    value: string
  }
};

export type TSlugProps = {
  field: TSlugField;
};
