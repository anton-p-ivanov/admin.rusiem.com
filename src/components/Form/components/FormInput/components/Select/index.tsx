import React from 'react';

import type { TSelectProps } from './types';
import './styles.scss';

const Select: React.FC<TSelectProps> = ({ field }) => {
  const {
    name,
    value,
    isDisabled = false,
    onChange,
    attrs,
  } = field;

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Array.from(target.selectedOptions).map((option) => option.value);
    if (selectedValue.length > 0) {
      return onChange && onChange(attrs?.isMultiple ? selectedValue : (selectedValue.shift() || ''));
    }

    return onChange && onChange(attrs?.isMultiple ? [] : '');
  };

  return (
    <select
      className="form__input form__input--select"
      name={name}
      value={value}
      disabled={isDisabled}
      multiple={attrs && attrs.isMultiple}
      onChange={onChangeHandler}
      size={attrs && attrs.size}
    >
      {attrs && attrs.placeholder && <option value="">{attrs.placeholder}</option>}
      {attrs && attrs.options.map((option) => (
        <option value={option.value} disabled={option.isDisabled} key={`option-${name}-${option.value}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export type { TSelectOption, TSelectOptions } from './types';

export default Select;
