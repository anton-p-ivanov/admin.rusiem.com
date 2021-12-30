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
      <div className="grid-view__columns">
        <Form.Field field={fields.activeFrom} />
        <Form.Field field={fields.activeTo} />
      </div>
      <Form.Field field={fields.template} />
    </>
  );
};

export default PropertiesTab;
