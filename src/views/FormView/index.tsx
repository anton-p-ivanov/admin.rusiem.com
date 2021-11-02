import React from 'react';

import { Form } from 'components';
import { Utils } from 'utils';

import useReducer from './hooks/useReducer';
import { TReducerState } from './store/types';

import type { TUseReducer } from './hooks/useReducer';
import type { TFormViewProps } from './types';

type TFormView = React.FC<TFormViewProps> & {
  Reducer: (initialState?: TReducerState) => TUseReducer
};

const FormView: TFormView = (props) => {
  const { variant, onSubmit, children } = props;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => onSubmit && onSubmit(event);

  const className = Utils.className([
    'form-view',
    variant && `form-view--${variant}`,
  ]);

  return (
    <div className={className}>
      <Form onSubmit={onSubmitHandler}>
        {children}
      </Form>
    </div>
  );
};

FormView.Reducer = useReducer;

export default FormView;
