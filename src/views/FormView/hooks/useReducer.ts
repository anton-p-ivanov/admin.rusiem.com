import React from 'react';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';

import type { TReducerState } from '../store/types';

export type TUseReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
};

const useReducer = (initialState?: TReducerState): TUseReducer => {
  const [state, dispatch] = React.useReducer(Reducer, initialState || INITIAL_STATE);

  const update = (reducerState: TReducerState) => {
    dispatch(handlers.updateState(reducerState));
  };

  const reset = () => {
    dispatch(handlers.resetState());
  };

  return { state, update, reset };
};

export default useReducer;
