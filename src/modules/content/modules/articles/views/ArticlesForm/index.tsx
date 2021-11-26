import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button, Form } from 'components';
import FormView, { useFields, withStore } from 'views/FormView';
import { useStore } from 'views/FormView/store';
import WorkflowView from 'views/WorkflowView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import _fields from './fields';

import type { TArticlesFormProps } from './types';
import './styles.scss';

const ArticlesForm: React.FC<TArticlesFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();
  const { state, update } = useStore();
  const fields = useFields(_fields);

  const endpoints = {
    request: uuid && `GET:/content/articles/${uuid}`,
    submit: isNewElement ? 'POST:/content/articles' : (uuid && `PUT:/content/articles/${uuid}`),
    success: 'GET:/content/articles',
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => update({ ...state, data: defaults }), []);

  return (
    <FormView endpoints={endpoints}>
      <div className="grid-view">
        <LeftPane fields={fields} />
        <RightPane fields={fields} />
      </div>
      <Form.Actions>
        <Button isSubmit variant="primary">
          Сохранить
        </Button>
        <Link to="/content/articles" className="btn btn--default">
          Отменить
        </Link>
      </Form.Actions>
      {!isNewElement && <WorkflowView />}
    </FormView>
  );
};

export default withStore(ArticlesForm);
