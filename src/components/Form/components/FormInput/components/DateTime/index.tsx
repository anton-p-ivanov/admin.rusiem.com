import React from 'react';

import type { TDateTimeProps } from './types';

const DateTime = React.forwardRef<HTMLInputElement, TDateTimeProps>(({ field }, ref) => {
  const { value, onChange } = field;
  const valueArray = value ? value.toString().split(/[T+:]/) : [];

  const parsedValue = valueArray.length > 0
    ? `${valueArray[0]}T${valueArray[1]}:${valueArray[2]}`
    : '';

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => (
    onChange && onChange(event.target.value)
  );

  return (
    <input
      type="datetime-local"
      name={field.name}
      value={parsedValue}
      onChange={onChangeHandler}
      className="form__input form__input--datetime"
      disabled={field.isDisabled}
      ref={ref}
    />
  );
});

DateTime.displayName = 'DateTime';

export default DateTime;
