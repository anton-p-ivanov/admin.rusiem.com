import React from 'react';

import FormActions from './components/FormActions';
import FormField from './components/FormField';
import FormGroup from './components/FormGroup';

import type { TForm } from './types';

const Form: TForm = (props) => {
  const { variant = 'default', onSubmit, children } = props;

  return (
    <form className={`form form--${variant}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.Field = FormField;
Form.Group = FormGroup;
Form.Actions = FormActions;

export default Form;
