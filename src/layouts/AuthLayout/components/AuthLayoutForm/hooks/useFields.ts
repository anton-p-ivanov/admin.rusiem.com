import { useContext, useEffect, useRef } from 'react';

import Store from 'store';

import fields from '../fields';

import type { TFormFields } from 'components/Form';

type TUseFields = TFormFields;

const useFields = (): TUseFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { formView } = useContext(Store);
  const { state, update } = formView;

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const value = state.data[field.name];
    const extend = {
      value: typeof value !== 'undefined' ? value : '',
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
