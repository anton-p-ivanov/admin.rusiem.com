import React from 'react';

import { Form } from 'components/index';
import { ListViewFilter } from 'views/ListView/components';

import fields from './fields';

const TemplatesListFilter: React.FC = () => (
  <ListViewFilter param="mail.templates.filter" fields={fields}>
    {((context) => (
      <>
        <Form.Field field={context.fields.search} />
      </>
    ))}
  </ListViewFilter>
);

export default TemplatesListFilter;
