import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthLayout, MainLayout } from 'layouts';

import useToken from './hooks/useToken';
import './styles.scss';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      {token ? <MainLayout /> : <AuthLayout setToken={setToken} />}
    </BrowserRouter>
  );
};

export default AppView;
