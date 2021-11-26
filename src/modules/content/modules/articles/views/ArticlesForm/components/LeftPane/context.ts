import React from 'react';

import type { TLeftPaneContext } from './types';

export default React.createContext<TLeftPaneContext>({
  fields: {},
});
