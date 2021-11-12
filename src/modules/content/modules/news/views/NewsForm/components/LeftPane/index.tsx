import React from 'react';

import { Form } from 'components';

import type { TLeftPaneProps } from './types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => (
  <div className="grid-view__left-pane">
    <div className="grid-view__columns">
      <Form.Field field={fields.publishedAt} />
    </div>
    <Form.Field field={fields.title} />
    <Form.Field field={fields.slug} />
    <Form.Field field={fields.description} />
    <Form.Field field={fields.content} />
    <div className="grid-view__columns">
      <Form.Field field={fields.imageSmall} />
      <Form.Field field={fields.imageLarge} />
    </div>
    <div className="grid-view__columns">
      <Form.Field field={fields.sort} />
    </div>
  </div>
);

export default LeftPane;
