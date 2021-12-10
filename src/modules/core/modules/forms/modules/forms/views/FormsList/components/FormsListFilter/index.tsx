import React from 'react';

import { Form } from 'components/index';
import { ListViewFilter } from 'views/ListView/components';

import fields from './fields';

const FormsListFilter: React.FC = () => (
  <ListViewFilter param="forms.filter" fields={fields}>
    {(context) => (
      <>
        <Form.Field field={context.fields.title} />
        <Form.Field field={context.fields.publishedAt} />
        <Form.Field field={context.fields.site} />
        <Form.Field field={context.fields.isPublished} />
      </>
    )}
  </ListViewFilter>
);

export default FormsListFilter;
