import React from 'react';

import { TReducersContext } from './types';

export const DEFAULT_VALUE = {
  /**/
};

const Context = React.createContext<TReducersContext>(DEFAULT_VALUE);

export default Context;
