import React from 'react';

import { INITIAL_STATE as FORM_VIEW_STATE } from 'views/FormView/store/reducer';
import { INITIAL_STATE as LIST_VIEW_STATE } from 'views/ListView/store/reducer';

import type { TStoreContext } from './types';

export default React.createContext<TStoreContext>({
  formView: {
    state: FORM_VIEW_STATE,
    update: () => null,
    reset: () => null,
  },
  listView: {
    state: LIST_VIEW_STATE,
    update: () => null,
    refresh: () => null,
    request: () => null,
  },
});
