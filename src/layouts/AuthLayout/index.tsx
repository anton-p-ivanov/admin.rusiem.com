import React from 'react';

import Context from './context';
import { AuthLayoutForm } from './components';

import type { TAuthProps } from './types';

import './styles.scss';

const AuthLayout: React.FC<TAuthProps> = ({ setToken }) => (
  <Context.Provider value={{ setToken }}>
    <div className="layout layout--auth">
      <AuthLayoutForm />
      <div className="layout__copyright">
        © ООО &quot;РуСИЕМ&quot;,&nbsp;
        {new Date().getFullYear()}
      </div>
    </div>
  </Context.Provider>
);

export default AuthLayout;
