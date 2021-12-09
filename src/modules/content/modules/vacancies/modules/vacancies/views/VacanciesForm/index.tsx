import React from 'react';
import { useParams } from 'react-router-dom';

import EditView from 'views/EditView';

import { LeftPane, RightPane } from './components';
import defaults from './defaults';
import fields from './fields';

import type { TVacanciesFormProps } from './types';
import './styles.scss';

const VacanciesForm: React.FC<TVacanciesFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();

  const endpoints = {
    request: uuid && `GET:/vacancies/${uuid}`,
    submit: isNewElement ? 'POST:/vacancies' : (uuid && `PUT:/vacancies/${uuid}`),
    success: '/content/vacancies/vacancies',
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

export default VacanciesForm;
