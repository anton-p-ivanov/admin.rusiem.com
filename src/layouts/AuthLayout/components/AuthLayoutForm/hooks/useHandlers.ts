import React from 'react';

type TUseHandlers = {
  submit: (event: React.FormEvent<HTMLFormElement>) => void,
};

const useHandlers = (): TUseHandlers => ({
  submit: (event) => {
    event.preventDefault();
  },
});

export default useHandlers;
