import React from 'react';

import classNames from 'classnames';

import type { TOverlayProps } from './types';
import './styles.scss';

const Overlay: React.FC<TOverlayProps> = ({ variant }) => {
  const className = classNames([
    'overlay',
    variant && `overlay--${variant}`,
  ]);

  return (
    <div className={className} />
  );
};

export default Overlay;
