import { useStore } from '../store';

import type { TFormFields } from 'components/Form/types';

const useFields = (fields: TFormFields): TFormFields => {
  const { state, update } = useStore();

  const mappedFields = Object.entries(fields).map(([key, field]) => {
    const value = state.data[field.name];
    const extend = {
      value: (typeof value === 'undefined' || value === null) ? (field.emptyValue || '') : value,
      errors: state.errors[field.name],
      onChange: (v: typeof value) => {
        update({ ...state, data: { ...state.data, [field.name]: v } });
      },
    };

    return [key, { ...field, ...extend }];
  });

  return (
    Object.fromEntries(mappedFields) as TFormFields
  );
};

export default useFields;
