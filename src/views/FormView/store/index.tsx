/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';

import formViewReducer from '../hooks/useReducer';
import { TFormViewReducer } from '../types';
import Context from './context';

function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const ComponentWithStore: React.FC<T> = (props) => (
    <Context.Provider value={formViewReducer()}>
      <Component {...props} />
    </Context.Provider>
  );

  ComponentWithStore.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithStore;
}

const useStore = (): TFormViewReducer => (
  useContext<TFormViewReducer>(Context)
);

export { useStore };

export default withStore;
