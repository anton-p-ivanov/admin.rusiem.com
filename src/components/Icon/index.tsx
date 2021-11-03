import React from 'react';

import { Utils } from 'utils';

import type { TIconProps } from './types';

import sprites from 'feather-icons/dist/feather-sprite.svg';
import './styles.scss';

const Icon: React.FC<TIconProps> = (props) => {
  const {
    name, size, title, variant,
  } = props;

  const className = Utils.className([
    'feather',
    `feather--${name}`,
    size && `feather--${size}`,
    variant && `feather--${variant}`,
  ]);

  return (
    <svg className={className}>
      {title ? <title>{title}</title> : null}
      <use href={`${sprites}#${name}`} />
    </svg>
  );
};

export default Icon;
