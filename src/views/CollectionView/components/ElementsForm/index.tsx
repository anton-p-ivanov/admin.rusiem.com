import React, { useState } from 'react';

import ElementsFormInner from '../ElementsFormInner';
import Context from './context';

import type { TElementsFormState } from './types';
import type { TFormFields } from 'components/Form/types';
import type { TElementsForm } from 'views/CollectionView/types';

type TElementsFormProps = {
  component: React.FC<TElementsForm>;
  fields: TFormFields;
};

const ElementsForm: React.FC<TElementsFormProps> = ({ component, fields }) => {
  const [state, update] = useState<TElementsFormState>({});

  return (
    <Context.Provider value={{ state, update }}>
      <ElementsFormInner component={component} fields={fields} />
    </Context.Provider>
  );
};

export default ElementsForm;
