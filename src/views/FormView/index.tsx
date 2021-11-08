import React from 'react';

import { Form } from 'components';
import { Utils } from 'utils';

import type { TFormViewProps } from './types';

const FormView: React.FC<TFormViewProps> = (props) => {
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

export default FormView;
