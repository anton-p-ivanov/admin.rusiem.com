import React from 'react';
import { useParams } from 'react-router-dom';

import FormView, { useFields, withStore } from 'views/FormView';

import { LeftPane, RightPane } from './components';
import _fields from './fields';

import type { TNewsFormProps } from './types';
import './styles.scss';

const NewsForm: React.FC<TNewsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid = 'none' } = useParams();
  const fields = useFields(_fields);

  const endpoints = {
    request: `GET:/content/news/${uuid}`,
    submit: isNewElement ? 'POST:/content/news' : `PUT:/content/news/${uuid}`,
    success: 'GET:/content/news',
  };

  return (
    <FormView endpoints={endpoints}>
      <div className="grid-view">
        <LeftPane fields={fields} />
        <RightPane fields={fields} />
      </div>
    </FormView>
  );
};

export default withStore(NewsForm);
