import React from 'react';

import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';

import type { TElementsFormProps } from './types';

const ElementsForm: React.FC<TElementsFormProps> = (props) => {
  const { component: FormComponent, fields = {} } = props;

  const propHandlers = useHandlers();
  const propFields = useFields(fields);

  return (
    <>
      <FormComponent handlers={propHandlers} fields={propFields} />
    </>
  );
};

export default ElementsForm;
