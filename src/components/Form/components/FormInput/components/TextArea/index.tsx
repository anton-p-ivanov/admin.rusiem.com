import React from 'react';

import classNames from 'classnames';

import type { TTextAreaProps } from './types';

import './styles.scss';

const TextArea: React.FC<TTextAreaProps> = ({ field }) => {
  const {
    name, value, attrs = {}, isDisabled = false, onChange,
  } = field;

  const className = classNames([
    'form__input',
    'form__input--textarea',
    attrs.size && `form__input--textarea-${attrs.size}`,
  ]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  return (
    <textarea
      name={name}
      value={value}
      disabled={isDisabled}
      onChange={onChangeHandler}
      className={className}
    />
  );
};

TextArea.displayName = 'TextArea';

export default TextArea;
