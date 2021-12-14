import React from 'react';

import { Form } from 'components/index';

import type { TRightPaneProps } from './types';

const RightPane: React.FC<TRightPaneProps> = ({ fields }) => (
  <div className="grid-view__right-pane">
    <Form.Group>
      <Form.Field field={fields.isDefault} />
    </Form.Group>
  </div>
);

export default RightPane;
