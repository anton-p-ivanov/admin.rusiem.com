import { useEffect, useRef } from 'react';

import { useStore } from 'views/FormView/store';

import fields from '../fields';

import type { TFormFields } from 'components/Form/types';

const useFields = (): TFormFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { state, update } = useStore();

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const value = state.data[field.name];
    const extend = {
      // value: typeof value !== 'undefined' ? value : undefined,
      errors: state.errors[field.name],
      onChange: (v: typeof value) => {
        update({ ...state, data: { ...state.data, [field.name]: v } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  if (fields.username.value) {
    fields.password.ref = ref;
  } else {
    fields.username.ref = ref;
  }

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    fields
  );
};

export default useFields;
