/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Modal from 'components/Modal';
import useClickOutside from 'utils/useClickOutside';

import Context from './context';

function withModal<T>(
  Component: React.ComponentType<T>,
  ModalComponent: React.ComponentType,
): React.FC<T> {
  const ComponentWithModal: React.FC<T> = (props: T) => {
    const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);

    const toggleModal = (value?: boolean) => {
      setIsVisible(typeof value !== 'undefined' ? value : !isVisible);
    };

    return (
      <Context.Provider value={{ toggle: toggleModal }}>
        <Component {...props} />
        <Modal isVisible={isVisible} title="Test" ref={ref}>
          <ModalComponent />
        </Modal>
      </Context.Provider>
    );
  };

  ComponentWithModal.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithModal;
}

export default withModal;
