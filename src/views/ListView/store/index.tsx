/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';

import listViewReducer from '../hooks/useReducer';
import { TListViewReducer } from '../types';
import Context from './context';

function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const ComponentWithStore: React.FC<T> = (props) => (
    <Context.Provider value={listViewReducer()}>
      <Component {...props} />
    </Context.Provider>
  );

  ComponentWithStore.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithStore;
}

const useStore = (): TListViewReducer => (
  useContext<TListViewReducer>(Context)
);

export { useStore };

export default withStore;
