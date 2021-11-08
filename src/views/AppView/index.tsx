import React from 'react';

import { AuthLayout, MainLayout } from 'layouts';
import Store, { TReducersContext } from 'store';
import formViewReducer from 'views/FormView/hooks/useReducer';

import useToken from './hooks/useToken';
import './styles.scss';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  const state: TReducersContext = {
    formView: formViewReducer(),
  };

  return (
    <Store.Provider value={state}>
      {token ? <MainLayout /> : <AuthLayout setToken={setToken} />}
    </Store.Provider>
  );
};

export default AppView;
