import React from 'react';

import Text from '../Text';

import type { TDateProps } from './types';

const Date = React.forwardRef<HTMLInputElement, TDateProps>(({ field }, ref) => {
  const { value } = field;
  const valueArray = value ? value.toString().split('T') : [];

  return (
    <Text field={{ ...field, type: 'date', value: valueArray[0] }} ref={ref} />
  );
});

Date.displayName = 'Date';

export default Date;
