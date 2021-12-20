import React from 'react';

import { TAuthViewReducer } from '../types';
import { INITIAL_STATE } from './reducer';

export default React.createContext<TAuthViewReducer>({
  state: INITIAL_STATE,
  update: () => null,
  reset: () => null,
  submit: () => new Promise(() => false),
});
