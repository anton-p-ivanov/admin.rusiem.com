import React from 'react';

import classNames from 'classnames';

import type { TAlertProps } from './types';
import './styles.scss';

const Alert: React.FC<TAlertProps> = (props) => {
  const { variant = 'info', children } = props;

  const className = classNames(
    'alert',
    variant && `alert--${variant}`,
  );

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Alert;
