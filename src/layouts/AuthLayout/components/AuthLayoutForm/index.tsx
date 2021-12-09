import React from 'react';

import logo from 'assets/images/rusiem_black.svg';
import { Button, Form } from 'components';
import FormView, { withStore, Context } from 'views/FormView';

import fields from './fields';
import { useHandlers } from './hooks';
import './styles.scss';

const AuthLayoutForm: React.FC = () => {
  const handlers = useHandlers();

  return (
    <FormView variant="auth-form" fields={fields} onSubmit={handlers.submit}>
      <div className="form__logo">
        <img src={logo} alt="Система управления сайтами" width="150" />
      </div>
      <div className="form__title">
        Система управления сайтами
      </div>
      <Context.Consumer>
        {(context) => (
          <>
            <Form.Field field={context.fields.username} />
            <Form.Field field={context.fields.password} />
          </>
        )}
      </Context.Consumer>
      <Form.Actions>
        <Button isSubmit variant="primary">
          Войти в систему
        </Button>
      </Form.Actions>
    </FormView>
  );
};

export default withStore(AuthLayoutForm);
