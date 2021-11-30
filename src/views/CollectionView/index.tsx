import React, { useState } from 'react';

import Modal from 'components/Modal';
import useClickOutside from 'utils/useClickOutside';
import { useStore } from 'views/FormView/store';

import ElementsForm from './components/ElementsForm';
import { TElementsFormState } from './components/ElementsForm/types';
import ElementsList from './components/ElementsList';
import { ViewContext, FormContext } from './context';

import type { TCollectionViewProps } from './types';
import type { TReducerData } from 'views/FormView/store/types';

const CollectionView: React.FC<TCollectionViewProps> = (props) => {
  const { property, settings } = props;
  const [formState, formStateUpdate] = useState<TElementsFormState>({});
  const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);
  const { state } = useStore();

  const toggleModal = (value?: boolean) => {
    setIsVisible(typeof value !== 'undefined' ? value : !isVisible);
  };

  const data = state.data[property] as TReducerData[];

  return (
    <ViewContext.Provider value={{ toggleModal, property }}>
      <FormContext.Provider value={{ state: formState, update: formStateUpdate }}>
        <ElementsList data={data} columns={settings.columns} templates={settings.templates} />
        {isVisible && (
          <Modal title="Test" ref={ref}>
            <ElementsForm component={settings.form} fields={settings.fields} />
          </Modal>
        )}
      </FormContext.Provider>
    </ViewContext.Provider>
  );
};

export default CollectionView;
