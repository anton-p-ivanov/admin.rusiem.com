import React from 'react';

import { Form, Tabs } from 'components';
import LocaleView from 'views/LocaleView';

import type { TLeftPaneProps } from './types';
import type { TFormFields } from 'components/Form/types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => {
  const localeFields = {
    subject: fields.subject,
    text: fields.text,
    html: fields.html,
  };

  const localeTypes = [
    { value: 'text', label: 'Текст' },
    { value: 'html', label: 'HTML' },
  ];

  const localeTemplate = (templateFields: TFormFields) => (
    <div className="locale-fields">
      <Form.Field field={templateFields.subject} />
      <Tabs
        variant="t10n"
        items={localeTypes.map((type) => ({
          label: type.label,
          component: <Form.Field field={templateFields[type.value]} />,
        }))}
      />
    </div>
  );

  return (
    <div className="grid-view__left-pane">
      <Form.Group>
        <div className="grid-view__columns">
          <Form.Field field={fields.sender} />
          <Form.Field field={fields.recipient} />
        </div>
        <Form.Field field={fields.code} />
      </Form.Group>
      <Form.Group>
        <LocaleView fields={localeFields} template={localeTemplate} />
      </Form.Group>
    </div>
  );
};

export default LeftPane;
