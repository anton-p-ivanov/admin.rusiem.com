import React from 'react';

import logo from 'assets/images/rusiem_black.svg';
import { Button, Form } from 'components';
import FormView, { withStore, useFields } from 'views/FormView';

import fields from './fields';
import { useHandlers } from './hooks';
import './styles.scss';

const AuthLayoutForm: React.FC = () => {
  const handlers = useHandlers();
  const { username, password } = useFields(fields);

  return (
    <FormView variant="auth-form" onSubmit={handlers.submit}>
      <div className="form__logo">
        <img src={logo} alt="Система управления сайтами" width="150" />
      </div>
      <div className="form__title">
        Система управления сайтами
      </div>
      <Form.Field field={username} />
      <Form.Field field={password} />
      <Form.Actions>
        <Button isSubmit variant="primary">
          Войти в систему
        </Button>
      </Form.Actions>
    </FormView>
  );
};

export default withStore(AuthLayoutForm);
