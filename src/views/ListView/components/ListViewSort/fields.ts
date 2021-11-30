import type { TFormField, TFormFields } from 'components/Form/types';

const sortBy: TFormField<string> = {
  name: 'sortBy',
  type: 'select',
};

const sortOrder: TFormField<string> = {
  name: 'sortOrder',
  type: 'select',
  attrs: {
    options: [
      { value: 'ASC', label: 'По возр.' },
      { value: 'DESC', label: 'По убыв.' },
    ],
  },
};

const fields: TFormFields = {
  sortBy,
  sortOrder,
};

export default fields;
