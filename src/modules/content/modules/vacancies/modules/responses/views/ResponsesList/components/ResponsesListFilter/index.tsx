import React from 'react';

import { Form } from 'components/index';
import { ListViewFilter } from 'views/ListView/components';

import fields from './fields';

const ResponsesListFilter: React.FC = () => (
  <ListViewFilter param="vacancies.responses.filter" fields={fields}>
    {((context) => (
      <>
        <Form.Field field={context.fields.search} />
        <Form.Field field={context.fields.publishedAt} />
        <Form.Field field={context.fields.vacancy} />
      </>
    ))}
  </ListViewFilter>
);

export default ResponsesListFilter;
