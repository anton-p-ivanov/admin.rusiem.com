import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'components';
import FormView, { withStore, Context } from 'views/FormView';
import WorkflowView from 'views/WorkflowView';

import type { TEditViewProps } from './types';

import './styles.scss';

const EditView: React.FC<TEditViewProps> = (props) => {
  const {
    fields, defaults, endpoints, children,
  } = props;

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults}>
      <div className="grid-view">
        <Context.Consumer>
          {children}
        </Context.Consumer>
      </div>
      <Form.Actions>
        <Button isSubmit variant="primary">
          Сохранить
        </Button>
        {endpoints && (
          <Link to={endpoints.success || '/'} className="btn btn--default">Отменить</Link>
        )}
      </Form.Actions>
      <WorkflowView />
    </FormView>
  );
};

export default withStore(EditView);
