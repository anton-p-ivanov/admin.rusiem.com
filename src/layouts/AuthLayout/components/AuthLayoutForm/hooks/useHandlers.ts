import React, { useContext } from 'react';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { useStore } from 'store';
import { Utils } from 'utils';

import Context from '../../../context';

type TUseHandlers = {
  submit: (event: React.FormEvent<HTMLFormElement>) => void,
};

type TAuthResponse = {
  token: string;
};

const useHandlers = (): TUseHandlers => {
  const { setToken } = useContext(Context);
  const { formView } = useStore();

  return {
    submit: (event) => {
      event.preventDefault();
      const { username, password } = formView.state.data;
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
          formView.update({
            ...formView.state,
            errors: { password: ['E-Mail или пароль введены неверно.'] },
          });
        },
      };

      Utils.API.request<TAuthResponse>(config)
        .then(handlers.success)
        .catch(handlers.error);
    },
  };
};

export default useHandlers;
