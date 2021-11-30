import React from 'react';

import { TListViewReducer } from '../types';
import { INITIAL_STATE } from './reducer';

export default React.createContext<TListViewReducer>({
  state: INITIAL_STATE,
  update: () => null,
  refresh: () => null,
  request: () => null,
});
