import { useEffect } from 'react';

import { useStore } from '../store';
import { TReducerData } from '../store/types';

import type { TFormFields } from 'components/Form/types';

const useFields = (fields: TFormFields): TFormFields => {
  const { state, update } = useStore();

  const mappedFields = Object.entries(fields).map(([key, field]) => {
    const value = state.data[field.name];
    const extend = {
      value: typeof value === 'undefined' ? (field.emptyValue || '') : value,
      errors: state.errors[field.name],
      onChange: (v: typeof value) => {
        update({ ...state, data: { ...state.data, [field.name]: v } });
      },
    };

    return [key, { ...field, ...extend }];
  });

  useEffect(() => {
    const defaults = Object.entries(fields)
      .filter(([, field]) => typeof field.defaultValue !== 'undefined')
      .map(([key, field]) => [key, field.defaultValue]);

    const data = { ...state.data, ...(Object.fromEntries(defaults) as TReducerData) };
    update({ ...state, data });

    return () => update({ ...state });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    Object.fromEntries(mappedFields) as TFormFields
  );
};

export default useFields;
