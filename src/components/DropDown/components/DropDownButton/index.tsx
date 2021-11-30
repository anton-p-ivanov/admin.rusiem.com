import React from 'react';

import Icon from 'components/Icon';

import type { TDropDownButtonProps } from './types';

const DropDownButton: React.FC<TDropDownButtonProps> = (props) => {
  const { icon, onClick, children } = props;

  return (
    <button type="button" className="dropdown__item dropdown__item--button" onClick={onClick}>
      <div className="dropdown__icon">
        <Icon name={icon} />
      </div>
      <div className="dropdown__label">{children}</div>
    </button>
  );
};

export default DropDownButton;
