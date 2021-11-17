import React from 'react';

import classNames from 'classnames';

import Overlay from 'components/Overlay';

import type { TModalProps } from './types';
import './styles.scss';

const Modal = React.forwardRef<HTMLDivElement, TModalProps>((props, ref) => {
  const {
    title, size, isVisible = false, children,
  } = props;

  const className = classNames(
    'modal',
    size && `modal--${size}`,
    isVisible && 'modal--visible',
  );

  return (
    <div className={className}>
      <div className="modal__content" ref={ref}>
        <div className="modal__header">
          {title}
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
      {isVisible && <Overlay />}
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
