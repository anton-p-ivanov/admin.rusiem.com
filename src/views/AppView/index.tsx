import React from 'react';

import { AuthLayout, MainLayout } from 'layouts';

import useToken from './hooks/useToken';
import './styles.scss';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  return <>{token ? <MainLayout /> : <AuthLayout setToken={setToken} />}</>;
};

export default AppView;
