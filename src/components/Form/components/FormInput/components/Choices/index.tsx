import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import type { TChoicesProps, TChoiceFieldAttributes, TChoice } from './types';
import './styles.scss';

const Choices: React.FC<TChoicesProps> = ({ field }) => {
  const DEFAULT_ATTRS: TChoiceFieldAttributes = {
    choices: [],
    isInline: false,
    isMultiple: false,
  };

  const {
    name,
    value,
    isDisabled = false,
    attrs = DEFAULT_ATTRS,
    onChange,
  } = field;

  const { choicesCallback, isInline = false, isMultiple = false } = attrs;

  const [choices, setChoices] = useState<TChoice[]>(attrs.choices);

  useEffect(() => {
    if (typeof choicesCallback === 'function') {
      choicesCallback()
        .then((response) => setChoices(response))
        .catch(() => setChoices([]));
    }

    return () => setChoices([]);
  }, [choicesCallback]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (isMultiple) {
      const arrayValue = Array.isArray(value) ? value : [value];
      const newValue = arrayValue.includes(target.value)
        ? arrayValue.filter((v) => v !== target.value)
        : [...arrayValue, target.value];

      if (typeof onChange === 'function') {
        onChange(newValue as string[]);
      }

      return newValue.length;
    }
    if (typeof onChange === 'function') {
      onChange(target.value);
    }

    return true;
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
