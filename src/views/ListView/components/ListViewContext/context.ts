import React from 'react';

import { TListViewContextContext } from './types';

export default React.createContext<TListViewContextContext>({
  remove: () => null,
});
