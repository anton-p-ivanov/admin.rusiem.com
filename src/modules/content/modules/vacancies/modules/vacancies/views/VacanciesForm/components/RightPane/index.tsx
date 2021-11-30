import React from 'react';

import { Form } from 'components';

import type { TRightPaneProps } from './types';

const RightPane: React.FC<TRightPaneProps> = ({ fields }) => (
  <div className="grid-view__right-pane">
    <Form.Group>
      <Form.Field field={fields.isPublished} />
    </Form.Group>
    <Form.Group>
      <Form.Field field={fields.sites} />
      <Form.Field field={fields.locale} />
    </Form.Group>
  </div>
);

export default RightPane;
