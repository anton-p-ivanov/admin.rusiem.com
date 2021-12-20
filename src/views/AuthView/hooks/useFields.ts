import fields from '../fields';
import { useStore } from '../store';

import type { TFormFields } from 'components/Form/types';

const useFields = (): TFormFields => {
  // const ref = useRef<HTMLInputElement>(null);
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

  // if (fields.username.value) {
  //   fields.password.ref = ref;
  // } else {
  //   fields.username.ref = ref;
  // }
  //
  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // }, []);

  return (
    Object.fromEntries(mappedFields) as TFormFields
  );
};

export default useFields;
