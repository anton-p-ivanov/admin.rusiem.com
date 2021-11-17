import React, { useContext } from 'react';

import { v4 } from 'uuid';

import { FormContext, ViewContext } from 'views/CollectionView/context';
import { useStore } from 'views/FormView/store';

import type { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const { state, update } = useStore();
  const { toggleModal, property } = useContext(ViewContext);
  const { state: formState } = useContext(FormContext);

  const closeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (typeof toggleModal === 'function') {
      toggleModal(false);
    }
  };

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const collection = (state.data[property] || []) as Record<string, unknown>[];

    const index = collection.findIndex((data) => data.uuid === formState.uuid);
    if (index > -1) {
      collection[index] = { ...formState };
    } else {
      collection.push({ ...formState, uuid: v4() });
    }

    update({ ...state, data: { ...state.data, [property]: collection } });

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
