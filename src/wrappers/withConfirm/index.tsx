/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Context, { INITIAL_STATE } from './context';

import type { TConfirmState } from './types';

function withConfirm<T>(Component: React.ComponentType<T>): React.FC<T> {
  const ComponentWithConfirm: React.FC<T> = (props: T) => {
    const [state, update] = useState<TConfirmState>(INITIAL_STATE);

    return (
      <Context.Provider value={{ state, update }}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  ComponentWithConfirm.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithConfirm;
}

export { Context };
export default withConfirm;
