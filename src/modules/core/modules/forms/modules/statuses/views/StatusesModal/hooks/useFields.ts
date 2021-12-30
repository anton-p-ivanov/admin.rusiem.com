import fields from '../fields';

import type { TDataFormStatus } from '@forms/config/types';
import type { TFormFields } from 'components/Form/types';

type TUseFields = (state: TDataFormStatus, update: (state: TDataFormStatus) => void) => TFormFields;

const useFields: TUseFields = (state, update) => {
  const mappedFields = Object.entries(fields).map(([key, field]) => {
    const value = state[field.name];
    const extend = {
      value: (typeof value === 'undefined' || value === null) ? (field.emptyValue || '') : value,
      onChange: (v: typeof value) => {
        update({ ...state, [field.name]: v });
      },
    };

    return [key, { ...field, ...extend }];
  });

  return (
    Object.fromEntries(mappedFields) as TFormFields
  );
};

export default useFields;
