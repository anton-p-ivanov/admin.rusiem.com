import React from 'react';
import { useParams } from 'react-router-dom';

import EditView from 'views/EditView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import fields from './fields';

import type { TNewsFormProps } from './types';
import './styles.scss';

const NewsForm: React.FC<TNewsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();

  const endpoints = {
    request: uuid && `GET:/content/news/${uuid}`,
    submit: isNewElement ? 'POST:/content/news' : (uuid && `PUT:/content/news/${uuid}`),
    success: '/content/news',
  };

  return (
    <EditView endpoints={endpoints} fields={fields} defaults={defaults}>
      {(context) => (
        <>
          <LeftPane fields={context.fields} />
          <RightPane fields={context.fields} />
        </>
      )}
    </EditView>
  );
};

export default NewsForm;
