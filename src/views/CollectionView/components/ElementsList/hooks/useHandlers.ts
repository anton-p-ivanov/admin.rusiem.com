import { useContext } from 'react';

import { ViewContext, FormContext } from 'views/CollectionView/context';
import { useStore } from 'views/FormView/store';

import type { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const { property, toggleModal } = useContext(ViewContext);
  const { state: formState, update: formUpdate } = useContext(FormContext);
  const { state, update } = useStore();

  const deleteHandler = (id: string) => {
    const collection = (state.data[property] || []) as Record<string, string>[];
    const filteredCollection = collection.filter((data) => data.uuid !== id);
    const data = { ...state.data, [property]: filteredCollection };
    update({ ...state, data });
  };

  const updateOrCopyElement = (id:string, createCopy: boolean) => {
    const collection = (state.data[property] || []) as Record<string, string>[];
    const element = collection.find((data) => data.uuid === id);

    if (typeof element !== 'undefined') {
      formUpdate({ ...formState, ...element, uuid: createCopy ? '' : element.uuid });
    }

    if (typeof toggleModal === 'function') {
      toggleModal(true);
    }
  };

  const updateHandler = (id: string) => {
    updateOrCopyElement(id, false);
  };

  const copyHandler = (id: string) => {
    updateOrCopyElement(id, true);
  };

  return {
    delete: deleteHandler,
    update: updateHandler,
    copy: copyHandler,
  };
};

export default useHandlers;
