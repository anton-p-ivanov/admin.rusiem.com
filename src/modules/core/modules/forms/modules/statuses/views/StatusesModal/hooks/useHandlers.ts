import React, { useContext } from 'react';

import { TDataForm } from '@forms/config/types';
import { useStore } from 'views/FormView/store';
import { Context } from 'wrappers/withModal';

import type { TDataFormStatus } from '@forms/config/types';

type TUseHandlers = (status: TDataFormStatus) => {
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void,
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const useHandlers: TUseHandlers = (status) => {
  const { toggle } = useContext(Context);
  const store = useStore();
  const { statuses } = store.state.data as TDataForm;

  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const index = statuses.findIndex((item) => item.uuid === status.uuid);

    if (index > -1) {
      statuses[index] = status;
    } else {
      statuses.push(status);
    }

    store.update({ ...store.state, data: { ...store.state.data, statuses } });
    return toggle && toggle(false);
  };

  const dismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return toggle && toggle(false);
  };

  return {
    submit,
    dismiss,
  };
};

export default useHandlers;
