import React, { useContext } from 'react';

import { Form } from 'components';

import Context from '../../context';

const MetaTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <Form.Field field={fields.meta} />
    </>
  );
};

export default MetaTab;
