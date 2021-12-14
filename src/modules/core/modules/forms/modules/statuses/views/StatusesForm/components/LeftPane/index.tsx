import React from 'react';

import { Form } from 'components/index';
import LocaleView from 'views/LocaleView';

import type { TLeftPaneProps } from './types';
import type { TFormFields } from 'components/Form/types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => {
  const localeFields = {
    title: fields.title,
  };

  const localeTemplate = (templateFields: TFormFields) => (
    <div className="locale-fields">
      <Form.Field field={templateFields.title} />
    </div>
  );

  return (
    <div className="grid-view__left-pane">
      <div className="grid-view__columns">
        <Form.Field field={fields.type} />
      </div>
      <Form.Field field={fields.name} />
      <Form.Group>
        <LocaleView fields={localeFields} template={localeTemplate} />
      </Form.Group>
      <Form.Field field={fields.template} />
    </div>
  );
};

export default LeftPane;
