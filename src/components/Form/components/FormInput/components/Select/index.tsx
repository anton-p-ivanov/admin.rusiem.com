import React, { useEffect, useState } from 'react';

import { TSelectFieldAttributes, TSelectOptions } from './types';

import type { TSelectProps } from './types';
import './styles.scss';

const Select: React.FC<TSelectProps> = ({ field }) => {
  const DEFAULT_ATTRS: TSelectFieldAttributes = {
    options: [],
    isMultiple: false,
  };

  const {
    name, value = '', isDisabled = false, onChange, attrs = DEFAULT_ATTRS,
  } = field;

  const {
    optionsCallback, placeholder, size, isMultiple = false,
  } = attrs;

  const [options, setOptions] = useState<TSelectOptions>(attrs.options || []);

  useEffect(() => {
    if (typeof optionsCallback === 'function') {
      optionsCallback()
        .then((response) => setOptions(response))
        .catch(() => setOptions([]));
    }

    return () => setOptions([]);
  }, [optionsCallback]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Array.from(target.selectedOptions).map((option) => option.value);
    if (selectedValue.length > 0) {
      return onChange && onChange(isMultiple ? selectedValue : (selectedValue.shift() || ''));
    }

    return onChange && onChange(isMultiple ? [] : '');
  };

  return (
    <select
      className="form__input form__input--select"
      name={name}
      value={(isMultiple && !Array.isArray(value)) ? [value] : value}
      disabled={isDisabled}
      multiple={isMultiple}
      onChange={onChangeHandler}
      size={size}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option value={option.value} disabled={option.isDisabled} key={`option-${name}-${option.value}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export type { TSelectOption, TSelectOptions } from './types';

export default Select;
