import React from 'react';
import { useParams } from 'react-router-dom';

import { Form } from 'components/index';
import EditView from 'views/EditView';

import defaults from './defaults';
import fields from './fields';

import type { TGroupsFormProps } from './types';

import './styles.scss';

const GroupsForm: React.FC<TGroupsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();

  const endpoints = {
    request: uuid && `GET:/vacancies/groups/${uuid}`,
    submit: isNewElement ? 'POST:/vacancies/groups' : (uuid && `PUT:/vacancies/groups/${uuid}`),
    success: '/content/vacancies/groups',
  };

  return (
    <EditView endpoints={endpoints} fields={fields} defaults={defaults}>
      {(context) => (
        <div className="grid-view__left-pane">
          <Form.Field field={context.fields.title} />
          <Form.Field field={context.fields.slug} />
          <Form.Field field={context.fields.description} />
          <div className="grid-view__columns">
            <Form.Field field={context.fields.sort} />
          </div>
        </div>
      )}
    </EditView>
  );
};

export default GroupsForm;
