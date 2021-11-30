import React from 'react';

import FormContext from './components/ElementsForm/context';

import type { TCollectionViewContext } from './types';

const ViewContext = React.createContext<TCollectionViewContext>({
  property: 'none',
});

export {
  ViewContext,
  FormContext,
};
