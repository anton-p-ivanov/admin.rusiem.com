import React from 'react';

import Store, { TReducersContext } from 'store';
import { AuthLayout, MainLayout } from 'layouts';

import useToken from './hooks/useToken';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  const state: TReducersContext = {
    /**/
  };

  return (
    <Store.Provider value={state}>
      {token ? <MainLayout /> : <AuthLayout setToken={setToken} />}
    </Store.Provider>
  );
};

export default AppView;
