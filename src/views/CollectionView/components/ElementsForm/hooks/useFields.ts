import { useContext, useEffect } from 'react';

import Context from '../context';

import type { TFormFields } from 'components/Form/types';

const useFields = (fields: TFormFields): TFormFields => {
  const { state, update } = useContext(Context);

  const mappedFields = Object.entries(fields).map(([key, field]) => {
    const value = state[field.name];
    const extend = {
      value: typeof value === 'undefined' ? (field.emptyValue || '') : value,
      onChange: (v: typeof value) => {
        update({ ...state, [field.name]: v });
      },
    };

    return [key, { ...field, ...extend }];
  });

  useEffect(() => {
    const defaults = Object.entries(fields)
      .filter(([, field]) => typeof field.defaultValue !== 'undefined')
      .map(([key, field]) => [key, field.defaultValue]);

    update({ ...state, ...Object.fromEntries(defaults) });

    return () => update({ ...state });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    Object.fromEntries(mappedFields) as TFormFields
  );
};

export default useFields;
