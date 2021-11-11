import { useStore } from 'views/FormView/store';

import fields from '../fields';

import type { TFormField, TFormFields } from 'components/Form/types';

const useFields = (): TFormFields => {
  const { state, update } = useStore();

  Object.keys(fields).forEach((key) => {
    const field = fields[key] as TFormField<string>;
    const value = state.data[field.name];
    const extend = {
      value: (state.data[field.name] || field.defaultValue) as string,
      errors: state.errors[field.name],
      onChange: (v: typeof value) => {
        update({ ...state, data: { ...state.data, [field.name]: v } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  return (
    fields
  );
};

export default useFields;
