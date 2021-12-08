import React from 'react';
import { useParams } from 'react-router-dom';

import EditView from 'views/EditView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import fields from './fields';

import type { TTemplatesFormProps } from './types';
import './styles.scss';

const TemplatesForm: React.FC<TTemplatesFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();

  const endpoints = {
    request: uuid && `GET:/mail/templates/${uuid}`,
    submit: isNewElement ? 'POST:/mail/templates' : (uuid && `PUT:/mail/templates/${uuid}`),
    success: '/mail/templates',
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

export default TemplatesForm;
