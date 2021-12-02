import React from 'react';

import type { TFormViewContext } from './types';

export default React.createContext<TFormViewContext>({ fields: {} });
