import React from 'react';

import type { TConfirmContext, TConfirmState } from './types';

export const INITIAL_STATE: TConfirmState = {
  isValid: true,
};

const Context = React.createContext<TConfirmContext>({
  state: INITIAL_STATE,
  update: () => false,
});

export default Context;
