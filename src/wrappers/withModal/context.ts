import React from 'react';

import type { TModalContext } from './types';

export default React.createContext<TModalContext>({
  isVisible: false,
});
