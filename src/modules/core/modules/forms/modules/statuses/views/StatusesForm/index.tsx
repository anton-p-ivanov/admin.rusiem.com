import React from 'react';
import { useParams } from 'react-router-dom';

import EditView from 'views/EditView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import fields from './fields';

import type { TStatusesFormProps } from './types';

const StatusesForm: React.FC<TStatusesFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid, form = '' } = useParams();

  const endpoints = {
    request: uuid && `GET:/forms/statuses/${uuid}`,
    submit: isNewElement ? 'POST:/forms/statuses' : (uuid && `PUT:/forms/statuses/${uuid}`),
    success: `/forms/${form}/statuses`,
  };

  return (
    <EditView endpoints={endpoints} fields={fields} defaults={{ ...defaults, form }}>
      {(context) => (
        <>
          <LeftPane fields={context.fields} />
          <RightPane fields={context.fields} />
        </>
      )}
    </EditView>
  );
};

export default StatusesForm;
