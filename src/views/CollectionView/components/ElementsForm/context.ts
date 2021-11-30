import React from 'react';

import type { TElementsFormContext } from './types';

export default React.createContext<TElementsFormContext>({
  state: {},
  update: () => null,
});
