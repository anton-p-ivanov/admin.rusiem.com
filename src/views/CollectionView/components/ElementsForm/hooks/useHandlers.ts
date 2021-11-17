import React, { useContext } from 'react';

import { useStore } from 'views/FormView/store';

import collectionContext from '../../../context';
import formContext from '../context';

import type { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const { state, update } = useStore();
  const { toggleModal, property } = useContext(collectionContext);
  const { state: formState } = useContext(formContext);

  const closeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (typeof toggleModal === 'function') {
      toggleModal(false);
    }
  };

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const previousFormState = (state.data[property] || []) as Record<string, unknown>[];
    const data = { ...state.data, [property]: [...previousFormState, formState] };
    update({ ...state, data });

    if (typeof toggleModal === 'function') {
      toggleModal(false);
    }
  };

  return {
    close: closeHandler,
    submit: submitHandler,
  };
};

export default useHandlers;
