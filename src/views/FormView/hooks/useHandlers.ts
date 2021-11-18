import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useStore } from '../store';

import type { TReducerErrors } from '../store/types';
import type { TUseHandlers } from '../types';

const useHandlers: TUseHandlers = (props) => {
  const { endpoints, onSubmit, onSubmitSucceed } = props;

  const store = useStore();
  const navigate = useNavigate();

  const returnToList = () => {
    const returnUrl = endpoints?.success || 'GET:/';
    const [method, url] = returnUrl.split(':');

    if (method !== 'GET') {
      throw Error('Redirect can only be processed via GET method');
    }

    navigate(url);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(event);
    } else if (endpoints?.submit) {
      store.submit(endpoints.submit, store.state.data)
        .then((data) => (
          typeof onSubmitSucceed === 'function'
            ? onSubmitSucceed(data)
            : returnToList()))
        .catch((error: TReducerErrors) => error);
    }
  };

  return {
    submit: submitHandler,
  };
};

export default useHandlers;
