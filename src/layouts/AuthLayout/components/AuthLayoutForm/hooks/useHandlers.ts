import React, { useContext } from 'react';

import API from 'utils/api';
import { useStore } from 'views/FormView/store';

import Context from '../../../context';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';

type TUseHandlers = {
  submit: (event: React.FormEvent<HTMLFormElement>) => void,
};

type TAuthResponse = {
  token: string;
};

const useHandlers = (): TUseHandlers => {
  const { setToken } = useContext(Context);
  const { state, update } = useStore();

  return {
    submit: (event) => {
      event.preventDefault();
      const { username, password } = state.data;
      const config: AxiosRequestConfig = {
        url: '/auth',
        method: 'POST',
        data: {
          username,
          password,
        },
      };

      const handlers = {
        success: (response: AxiosResponse<TAuthResponse>) => (
          setToken(response.data.token)
        ),
        error: () => {
          update({
            ...state,
            errors: { password: ['E-Mail или пароль введены неверно.'] },
          });
        },
      };

      API.request<TAuthResponse>(config)
        .then(handlers.success)
        .catch(handlers.error);
    },
  };
};

export default useHandlers;
