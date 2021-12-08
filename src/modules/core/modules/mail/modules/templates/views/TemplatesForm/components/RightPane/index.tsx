import React from 'react';

import { Form } from 'components';

import type { TRightPaneProps } from './types';

const RightPane: React.FC<TRightPaneProps> = ({ fields }) => (
  <div className="grid-view__right-pane">
    <Form.Field field={fields.extraHeaders} />
    <Form.Field field={fields.attachment} />
  </div>
);

export default RightPane;
