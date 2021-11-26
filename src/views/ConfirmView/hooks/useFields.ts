import { useContext, useEffect, useRef } from 'react';

import { Context as ConfirmContext } from 'wrappers/withConfirm';
import { Context as ModalContext } from 'wrappers/withModal';

import type { TFormField, TFormFields } from 'components/Form/types';

const useFields = (): TFormFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { state, update } = useContext(ConfirmContext);
  const { isVisible } = useContext(ModalContext);

  const field: TFormField<string> = {
    ref,
    name: 'password',
    label: 'Введите пароль для подтверждения действия',
    type: 'password',
    value: state.password || '',
    errors: state.errors?.password,
    onChange: (value: string) => {
      update({ ...state, errors: {}, password: value });
    },
  };

  // Set focus on password field on visible
  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.focus();
      update({ ...state, password: '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return { password: field };
};

export default useFields;
