import React from 'react';

import { Button, Form } from 'components';
import { FormView } from 'views';

import { useFields, useHandlers } from './hooks';

import logo from 'assets/images/rusiem_black.svg';
import './styles.scss';

const AuthLayoutForm: React.FC = () => {
  const handlers = useHandlers();
  const fields = useFields();

  return (
    <FormView variant="auth-form" onSubmit={handlers.submit}>
      <div className="form__logo">
        <img src={logo} alt="Система управления сайтами" width="150" />
      </div>
      <div className="form__title">
        Система управления сайтами
      </div>
      <Form.Field field={fields.username} />
      <Form.Field field={fields.password} />
      <Form.Actions>
        <Button isSubmit variant="primary">
          Войти в систему
        </Button>
      </Form.Actions>
    </FormView>
  );
};

export default AuthLayoutForm;
