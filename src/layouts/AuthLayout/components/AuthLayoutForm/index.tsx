import React, { useContext } from 'react';

import logo from 'assets/images/rusiem_black.svg';
import AuthView, { withStore } from 'views/AuthView';

import Context from '../../context';
import './styles.scss';

const AuthLayoutForm: React.FC = () => {
  const { setToken } = useContext(Context);

  return (
    <div className="auth-layout-form">
      <div className="auth-layout-form__logo">
        <img src={logo} alt="Система управления сайтами" width="150" />
      </div>
      <div className="auth-layout-form__title">
        Система управления сайтами
      </div>
      <AuthView setToken={setToken} />
    </div>
  );
};

export default withStore(AuthLayoutForm);
