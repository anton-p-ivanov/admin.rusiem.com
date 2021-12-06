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
    <Form.Field field={fields.description} />
    <Form.Field field={fields.content} />
    <div className="grid-view__columns">
      <Form.Field field={fields.sort} />
      <Form.Field field={fields.group} />
    </div>
  </div>
);

export default LeftPane;
