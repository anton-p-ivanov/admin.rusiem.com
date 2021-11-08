import React from 'react';

import { AuthLayout, MainLayout } from 'layouts';
import withStore from 'store';

import useToken from './hooks/useToken';
import './styles.scss';

const AppView: React.FC = () => {
  const { token, setToken } = useToken();

  return <>{token ? <MainLayout /> : <AuthLayout setToken={setToken} />}</>;
};

export default withStore(AppView);
