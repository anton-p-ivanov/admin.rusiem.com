import React from 'react';

import API from 'utils/api';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';

import type { TReducerData, TReducerErrors, TReducerState } from '../store/types';
import type { TFormViewReducer } from '../types';
import type { AxiosResponse } from 'axios';

const useReducer = (initialState?: TReducerState): TFormViewReducer => {
  const [state, dispatch] = React.useReducer(Reducer, initialState || INITIAL_STATE);

  const update = (reducerState: TReducerState) => {
    dispatch(handlers.updateState(reducerState));
  };

  const reset = () => {
    dispatch(handlers.resetState());
  };

  const request = (endpoint: string) => {
    const [method, url] = endpoint.split(':', 2);

    if (method !== 'GET') {
      throw Error('Invalid request method');
    }

    dispatch(handlers.fetchSent());

    API.request<TReducerData>({ url })
      .then((response) => {
        dispatch(handlers.fetchSucceed({ ...state, data: response.data, errors: {} }));
      })
      .catch((response: AxiosResponse<TReducerErrors>) => {
        dispatch(handlers.fetchFailed({ ...state, errors: response.data }));
      });
  };

  return {
    state, update, request, reset,
  };
};

export default useReducer;
