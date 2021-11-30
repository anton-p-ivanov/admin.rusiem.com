import React from 'react';

import Text from '../Text';

import type { TPasswordProps } from './types';

const Password = React.forwardRef<HTMLInputElement, TPasswordProps>(({ field }, ref) => (
  <Text field={{ ...field, type: 'password' }} ref={ref} />
));

Password.displayName = 'Password';

export default Password;
