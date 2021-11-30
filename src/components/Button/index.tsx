import React from 'react';

import classNames from 'classnames';

import type { TButtonProps } from './types';
import './styles.scss';

const Button: React.FC<TButtonProps> = (props) => {
  const {
    name,
    size,
    isSubmit = false,
    isDisabled = false,
    variant = 'default',
    onClick,
    children,
  } = props;

  const className = classNames(
    'btn',
    isDisabled && 'btn--disabled',
    size && `btn--${size}`,
    variant && `btn--${variant}`,
  );

  return (
    <button
      name={name}
      type={isSubmit ? 'submit' : 'button'}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
