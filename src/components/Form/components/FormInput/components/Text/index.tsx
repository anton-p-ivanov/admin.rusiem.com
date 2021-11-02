import React from 'react';

import type { TTextProps } from './types';

const Text = React.forwardRef<HTMLInputElement, TTextProps>(({ field }, ref) => {
  const {
    onChange, name, value, attrs, type = 'text', isDisabled = false,
  } = field;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => (
    onChange && onChange(event.target.value)
  );

  return (
    <input
      type={type}
      name={name}
      value={value as string}
      onChange={onChangeHandler}
      className={`form__input form__input--${type}`}
      disabled={isDisabled}
      placeholder={attrs?.placeholder}
      ref={ref}
    />
  );
});

Text.displayName = 'Text';

export default Text;
