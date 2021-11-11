import React from 'react';

import classNames from 'classnames';

import { Form } from 'components';

import withStore from './store';

import type { TFormViewProps } from './types';

const FormView: React.FC<TFormViewProps> = (props) => {
  const { variant, onSubmit, children } = props;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => onSubmit && onSubmit(event);

  const className = classNames([
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

export { withStore };
export default FormView;
