import React from 'react';

import { AuthLayoutForm } from './components';

import type { TAuthProps } from './types';

import './styles.scss';

const AuthLayout: React.FC<TAuthProps> = () => (
  <div className="layout layout--auth">
    <AuthLayoutForm />
    <div className="layout__copyright">
      © ООО &quot;РуСИЕМ&quot;,&nbsp;
      {new Date().getFullYear()}
    </div>
  </div>
);

export default AuthLayout;
