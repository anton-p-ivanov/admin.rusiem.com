import { useContext } from 'react';

import API from 'utils/api';
import { useStore } from 'views/ListView/store';
import { Context as ConfirmContext } from 'wrappers/withConfirm';
import { Context as ModalContext } from 'wrappers/withModal';

import type { TUseHandlers } from '../types';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import type { TConfirmErrors } from 'wrappers/withConfirm/types';

const useHandlers = (): TUseHandlers => {
  const { refresh } = useStore();
  const { state, update } = useContext(ConfirmContext);
  const { toggle } = useContext(ModalContext);

  const dismissHandler = () => (
    toggle && toggle(false)
  );

  const confirmHandler = () => {
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: state.endpoint,
      data: {
        password: state.password,
      },
    };

    API.request<boolean>(config)
      .then((response) => {
        if (response.status === 200) {
          refresh();
          if (typeof toggle === 'function') toggle(false);
        } else {
          update({ ...state, errors: { password: ['Could not delete a row'] } });
        }
      })
      .catch((error: AxiosError) => {
        update({ ...state, errors: error.response?.data as TConfirmErrors });
      });
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
