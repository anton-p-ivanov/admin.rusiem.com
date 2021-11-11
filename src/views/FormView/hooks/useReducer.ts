import React from 'react';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';

import type { TReducerState } from '../store/types';
import type { TFormViewReducer } from '../types';

const useReducer = (initialState?: TReducerState): TFormViewReducer => {
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
