import React from 'react';

import { Utils } from 'utils';

import type { TButtonProps } from './types';

import './styles.scss';

const Button: React.FC<TButtonProps> = (props) => {
  const {
    name,
    isSubmit = false,
    isDisabled = false,
    variant = 'default',
    onClick,
    children,
  } = props;

  const className = Utils.className([
    'btn',
    isDisabled ? 'btn--disabled' : undefined,
    variant && `btn--${variant}`,
  ]);

  return (
    <button name={name} type={isSubmit ? 'submit' : 'button'} className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
