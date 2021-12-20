import React from 'react';

import { Alert, Button, Form } from 'components';

// import FormView, { withStore, Context } from 'views/FormView';
import { useHandlers, useFields } from './hooks';
import withStore, { useStore } from './store';

import type { TAuthViewProps } from './types';

import './styles.scss';

const AuthView: React.FC<TAuthViewProps> = ({ setToken }) => {
  const handlers = useHandlers(setToken);
  const { state } = useStore();
  const fields = useFields();

  return (
    <div className="auth-view">
      <Alert variant="warning" isVisible={'auth' in state.errors}>
        {Array.isArray(state.errors.auth) ? state.errors.auth.join() : 'Could not authenticate user'}
      </Alert>
      <Alert variant="danger" isVisible={'server' in state.errors}>
        {Array.isArray(state.errors.server) ? state.errors.server.join() : 'Authentication failed'}
      </Alert>
      <Form onSubmit={handlers.submit}>
        <div className="form__fields">
          <Form.Field field={fields.username} />
          <Form.Field field={fields.password} />
        </div>
        <Form.Actions>
          <Button isSubmit isDisabled={state.status === 'SUBMITTING'} variant="primary">
            Войти в систему
          </Button>
        </Form.Actions>
      </Form>
    </div>
  );
};

export { withStore };
export default AuthView;
