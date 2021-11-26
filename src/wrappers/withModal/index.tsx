/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Context from './context';

import type { TModalProps } from './types';

function withModal<T, M extends TModalProps>(
  Component: React.ComponentType<T>,
  Modal: React.ComponentType<M>,
): React.FC<T> {
  const ComponentWithModal: React.FC<T> = (props: T) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [modalProps, setModalProps] = useState<M>({} as M);

    const toggle = (value?: boolean, propsValue?: M) => {
      setIsVisible(typeof value !== 'undefined' ? value : !isVisible);
      if (typeof propsValue !== 'undefined') {
        setModalProps(propsValue);
      }
    };

    return (
      <Context.Provider value={{ toggle, isVisible }}>
        <Component {...props} />
        {isVisible && (
          <Modal {...modalProps} />
        )}
      </Context.Provider>
    );
  };

  ComponentWithModal.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithModal;
}

export { Context };
export default withModal;
