import React from 'react';

import API from 'utils/api';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';

import type { TAuthResponse, TReducerErrors, TReducerState } from '../store/types';
import type { TAuthViewReducer } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useReducer = (initialState?: TReducerState): TAuthViewReducer => {
  const [state, dispatch] = React.useReducer(Reducer, initialState || INITIAL_STATE);

  const update = (reducerState: TReducerState) => {
    dispatch(handlers.updateState(reducerState));
  };

  const reset = () => {
    dispatch(handlers.resetState());
  };

  const submit = (): Promise<TAuthResponse> => new Promise((resolve, reject) => {
    dispatch(handlers.submitSent());

    API
      .request<TAuthResponse>({ method: 'POST', url: '/auth', data: state.data })
      .then((response: AxiosResponse<TAuthResponse>) => {
        dispatch(handlers.submitSucceed());
        resolve(response.data);
      })
      .catch((error: AxiosError<TReducerErrors>) => {
        const errors: TReducerErrors = {};
        if (error.response?.status === 401) {
          errors.auth = ['E-Mail или пароль введены неверно.'];
        } else {
          errors.server = ['Сервис авторизации не доступен. Пожалуйста, повторите попытку позже.'];
        }

        dispatch(handlers.submitFailed(errors));
        reject(error);
      });
  });

  return {
    state, update, reset, submit,
  };
};

export default useReducer;
