import React, { useContext } from 'react';

import Store from 'store';
import { Utils } from 'utils';
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
  const { formView } = useContext(Store);
  const { username, password } = formView.state.data;

  return ({
    submit: (event) => {
      event.preventDefault();

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
  });
};

export default useHandlers;
