import React from 'react';

import Modal from 'components/Modal';
import useClickOutside from 'utils/useClickOutside';

import { useStore } from '../FormView/store';
import ElementsForm from './components/ElementsForm';
import ElementsList from './components/ElementsList';
import Context from './context';

import type { TReducerData } from '../FormView/store/types';
import type { TCollectionViewProps } from './types';

const CollectionView: React.FC<TCollectionViewProps> = (props) => {
  const { property, settings } = props;
  const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);
  const { state } = useStore();

  const toggleModal = (value?: boolean) => {
    setIsVisible(typeof value !== 'undefined' ? value : !isVisible);
  };

  const data = state.data[property] as TReducerData[];

  return (
    <Context.Provider value={{ toggleModal, property }}>
      <ElementsList data={data} columns={settings.columns} templates={settings.templates} />
      <Modal isVisible={isVisible} title="Test" ref={ref}>
        <ElementsForm component={settings.form} fields={settings.fields} />
      </Modal>
    </Context.Provider>
  );
};

export default CollectionView;
