import React from 'react';

import classNames from 'classnames';

import type { TChoicesProps, TChoiceFieldAttributes } from './types';
import './styles.scss';

const Choices: React.FC<TChoicesProps> = ({ field }) => {
  const {
    name,
    value,
    isDisabled = false,
    // onChange,
  } = field;

  const { choices, isInline = false, isMultiple = false } = field.attrs as TChoiceFieldAttributes;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const className = classNames([
    'choices',
    isInline && 'choices--inline',
  ]);

  return (
    <div className={className}>
      {choices.map((choice) => {
        const isChecked = isMultiple
          ? ((value && value.includes(choice.value)) || false)
          : choice.value === value;

        return (
          <label
            className="choices__item choice"
            key={`${name}-${choice.value}`}
            htmlFor={`${name}-${choice.value}`}
          >
            <input
              value={choice.value}
              name={isMultiple ? `${name}[]` : `${name}`}
              id={`${name}-${choice.value}`}
              className="choice__input"
              type={isMultiple ? 'checkbox' : 'radio'}
              checked={isChecked}
              disabled={isDisabled || choice.isDisabled || false}
              onChange={onChangeHandler}
            />
            <span className="choice__label">{choice.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Choices;
