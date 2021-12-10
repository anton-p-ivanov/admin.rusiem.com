import React from 'react';

import { Form } from 'components';

import type { TLeftPaneProps } from './types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => (
  <div className="grid-view__left-pane">
    <div className="grid-view__columns">
      <Form.Field field={fields.publishedAt} />
    </div>
    <Form.Field field={fields.title} />
    <Form.Field field={{ ...fields.slug, attrs: { value: fields.title.value } }} />
    <div className="grid-view__columns">
      <Form.Field field={fields.activeFrom} />
      <Form.Field field={fields.activeTo} />
    </div>
    <Form.Field field={fields.template} />
  </div>
);

export default LeftPane;
