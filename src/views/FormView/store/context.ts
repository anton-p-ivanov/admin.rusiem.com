import React from 'react';

import { TFormViewReducer } from '../types';
import { INITIAL_STATE } from './reducer';

export default React.createContext<TFormViewReducer>({
  state: INITIAL_STATE,
  update: () => null,
  request: () => null,
  reset: () => null,
  submit: () => new Promise(() => false),
});
