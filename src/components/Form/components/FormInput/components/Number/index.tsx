import React from 'react';

import type { TNumberProps } from './types';

const Number = React.forwardRef<HTMLInputElement, TNumberProps>(({ field }, ref) => {
  const {
    name, value, onChange, isDisabled = false,
  } = field;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(parseInt(event.target.value, 10));
    }
  };

  return (
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChangeHandler}
      className="form__input form__input--number"
      disabled={isDisabled}
      ref={ref}
    />
  );
});

Number.displayName = 'Number';

export default Number;
