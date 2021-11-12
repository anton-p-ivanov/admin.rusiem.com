import React from 'react';

import { TFormViewReducer } from '../types';
import { INITIAL_STATE as FORM_VIEW_STATE } from './reducer';

export default React.createContext<TFormViewReducer>({
  state: FORM_VIEW_STATE,
  update: () => null,
  request: () => null,
  reset: () => null,
});
