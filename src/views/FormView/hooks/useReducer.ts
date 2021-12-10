import React from 'react';

import API from 'utils/api';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';

import type { TReducerData, TReducerErrors, TReducerState } from '../store/types';
import type { TFormViewReducer } from '../types';
import type { AxiosError, AxiosResponse, Method } from 'axios';

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

  const submit = (endpoint: string, data: TReducerData): Promise<TReducerData> => {
    const [method, url] = endpoint.split(':', 2);

    if (!['PUT', 'POST', 'PATCH'].includes(method)) {
      throw Error('Form can be submitted only via POST, PUT or PATCH methods');
    }

    return new Promise((resolve, reject) => {
      dispatch(handlers.submitSent(data));

      API
        .request<TReducerData>({ method: method as Method, url, data })
        .then((response: AxiosResponse<TReducerData>) => {
          dispatch(handlers.submitSucceed(response.data));
          resolve(response.data);
        })
        .catch((error: AxiosError<TReducerErrors>) => {
          const errors = (error.response?.status === 422)
            ? (error.response?.data || {})
            : { _error: ['An error occurred while submitting data'] };

          dispatch(handlers.submitFailed(errors, error.response?.status === 422));
          reject(error);
        });
    });
  };

  return {
    state, update, request, reset, submit,
  };
};

export default useReducer;
