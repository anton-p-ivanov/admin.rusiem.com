/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';

import formViewReducer from 'views/FormView/hooks/useReducer';
import listViewReducer from 'views/ListView/hooks/useReducer';

import Context from './context';
import type { TStoreContext } from './types';

function withStore<T>(Component: React.ComponentType<T>): React.FC<T> {
  const ComponentWithStore: React.FC<T> = (props) => {
    const state: TStoreContext = {
      formView: formViewReducer(),
      listView: listViewReducer(),
    };

    return (
      <Context.Provider value={state}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  ComponentWithStore.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithStore;
}

const useStore = (): TStoreContext => (
  useContext<TStoreContext>(Context)
);

export { useStore };

export default withStore;
