import React from 'react';

import useFields from '../ElementsForm/hooks/useFields';
import useHandlers from '../ElementsForm/hooks/useHandlers';

import type { TFormFields } from 'components/Form/types';
import type { TElementsForm } from 'views/CollectionView/types';

type TElementsFormInnerProps = {
  component: React.FC<TElementsForm>;
  fields: TFormFields;
};

const ElementsFormInner: React.FC<TElementsFormInnerProps> = (props) => {
  const { component: FormComponent, fields = {} } = props;

  const propHandlers = useHandlers();
  const propFields = useFields(fields);

  return (
    <>
      <FormComponent handlers={propHandlers} fields={propFields} />
    </>
  );
};

export default ElementsFormInner;
