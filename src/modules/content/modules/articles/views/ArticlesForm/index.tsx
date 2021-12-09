import React from 'react';
import { useParams } from 'react-router-dom';

import EditView from 'views/EditView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import fields from './fields';

import type { TArticlesFormProps } from './types';
import './styles.scss';

const ArticlesForm: React.FC<TArticlesFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();

  const endpoints = {
    request: uuid && `GET:/content/articles/${uuid}`,
    submit: isNewElement ? 'POST:/content/articles' : (uuid && `PUT:/content/articles/${uuid}`),
    success: '/content/articles',
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

export default ArticlesForm;
