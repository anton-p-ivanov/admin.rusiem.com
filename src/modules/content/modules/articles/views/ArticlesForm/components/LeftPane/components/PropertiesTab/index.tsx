import React, { useContext } from 'react';

import { Form } from 'components';

import Context from '../../context';

const PropertiesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <div className="grid-view__columns">
        <Form.Field field={fields.publishedAt} />
      </div>
      <Form.Field field={fields.title} />
      <Form.Field field={{ ...fields.slug, attrs: { value: fields.title.value } }} />
      <Form.Field field={fields.description} />
      <Form.Field field={fields.content} />
      <Form.Field field={fields.source} />
      <div className="grid-view__columns">
        <Form.Field field={fields.attachment} />
        <Form.Field field={fields.sort} />
      </div>
    </>
  );
};

export default PropertiesTab;
