import React from 'react';

import { useStore } from 'views/AuthView/store';

type TUseHandlers = {
  submit: (event: React.FormEvent<HTMLFormElement>) => void,
};

const useHandlers = (setToken: (token: string) => void): TUseHandlers => {
  const { submit } = useStore();

  return ({
    submit: (event) => {
      event.preventDefault();

      submit()
        .then((response) => { setToken(response.token); })
        .catch(() => { /**/ });
    },
  });
};

export default useHandlers;
