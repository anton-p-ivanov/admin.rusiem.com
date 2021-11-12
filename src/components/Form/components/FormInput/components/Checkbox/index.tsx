import React from 'react';

import type { TCheckboxProps } from './types';

import './styles.scss';

const Checkbox: React.FC<TCheckboxProps> = ({ field }) => {
  const {
    name, value = false, isSelected, isDisabled = false, onChange,
  } = field;

  const changeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(event.target.checked);
    }
  };

  return (
    <input
      name={name}
      type="checkbox"
      checked={typeof isSelected !== 'undefined' ? isSelected : value}
      disabled={isDisabled}
      className="form__input form__input--checkbox"
      onChange={changeEventHandler}
    />
  );
};

export default Checkbox;
