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
    </>
  );
};

export default PropertiesTab;
