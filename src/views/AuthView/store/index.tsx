/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';

import authViewReducer from '../hooks/useReducer';
import Context from './context';

import type { TAuthViewReducer } from '../types';

function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const ComponentWithStore: React.FC<T> = (props) => (
    <Context.Provider value={authViewReducer()}>
      <Component {...props} />
    </Context.Provider>
  );

  ComponentWithStore.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithStore;
}

const useStore = (): TAuthViewReducer => (
  useContext<TAuthViewReducer>(Context)
);

export { useStore };

export default withStore;
