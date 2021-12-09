import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Form } from 'components';
import FormView, { withStore, Context } from 'views/FormView';
import WorkflowView from 'views/WorkflowView';

import type { TEditViewProps } from './types';

import './styles.scss';

const EditView: React.FC<TEditViewProps> = ({ children, ...props }) => {
  const [action, setAction] = useState<string>('submit');
  const { fields, defaults, endpoints } = props;
  const navigate = useNavigate();

  const onSubmitSucceed = () => {
    if (action === 'submit') {
      navigate(endpoints?.success || '/');
    }
  };

  return (
    <FormView
      endpoints={endpoints}
      fields={fields}
      defaults={defaults}
      onSubmitSucceed={onSubmitSucceed}
    >
      <div className="grid-view">
        <Context.Consumer>
          {children}
        </Context.Consumer>
      </div>
      <Form.Actions>
        <div>
          <Button isSubmit variant="primary" onClick={() => setAction('submit')}>Сохранить</Button>
          <Button isSubmit variant="default" onClick={() => setAction('apply')}>Применить</Button>
        </div>
        <Link to={endpoints?.success || '/'} className="btn btn--default">Отменить</Link>
      </Form.Actions>
      <WorkflowView />
    </FormView>
  );
};

export default withStore(EditView);
