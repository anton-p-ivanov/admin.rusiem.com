import React from 'react';

import { INITIAL_STATE as FORM_VIEW_STATE } from 'views/FormView/store/reducer';

import { TReducersContext } from './types';

export const DEFAULT_VALUE: TReducersContext = {
  formView: {
    state: FORM_VIEW_STATE,
    update: () => false,
    reset: () => false,
  },
};

const Context = React.createContext<TReducersContext>(DEFAULT_VALUE);

export default Context;
