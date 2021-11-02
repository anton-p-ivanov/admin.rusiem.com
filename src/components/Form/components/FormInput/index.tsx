import React from 'react';

import * as Input from './components';

import type { TFormInputProps } from './types';

import './styles.scss';

type TFormInput = React.FC<TFormInputProps> & {
  // Checkbox: typeof Input.Checkbox;
  // Choices: typeof Input.Choices;
  // Date: typeof Input.Date;
  // DateTime: typeof Input.DateTime;
  // File: typeof Input.File;
  // Number: typeof Input.Number;
  // Password: typeof Input.Password;
  // Select: typeof Input.Select;
  Text: typeof Input.Text;
  // TextArea: typeof Input.TextArea;
};

const FormInput: TFormInput = (props) => {
  const { field } = props;
  // const { isDisabled = false } = field;
  //
  // const fieldAttrs = {
  //   name: field.name,
  //   isDisabled: isDisabled,
  //   onChange: field.onChange,
  //   ref: field.ref,
  //   ...field.attrs
  // };

  switch (field.type) {
    // case 'checkbox':
    //   return <Input.Checkbox {...{ ...fieldAttrs, value: field.value as boolean }} />;
    // case 'choices':
    //   return <Input.Choices {...{ ...fieldAttrs, value: field.value as [] }} />;
    // case 'date':
    //   return <Input.Date {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'dateTime':
    //   return <Input.DateTime {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'file':
    //   return <Input.File {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'number':
    //   return <Input.Number {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'password':
    //   return <Input.Password {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'select':
    //   return <Input.Select {...{ ...fieldAttrs, value: field.value as string }} />;
    // case 'textarea':
    //   return <Input.TextArea {...{ ...fieldAttrs, value: field.value as string }} />;
    default:
      return (
        <Input.Text field={field} ref={field.ref} />
      );
  }
};

// // FormInput.Boolean = Inputs.Boolean;
// FormInput.Checkbox = Input.Checkbox;
// FormInput.Choices = Input.Choices;
// FormInput.Date = Input.Date;
// FormInput.File = Input.File;
// FormInput.DateTime = Input.DateTime;
// FormInput.Number = Input.Number;
// FormInput.Password = Input.Password;
// // FormInput.Roles = Inputs.Roles;
// FormInput.Select = Input.Select;
// // FormInput.Sites = Inputs.Sites;
FormInput.Text = Input.Text;
// FormInput.TextArea = Input.TextArea;
// // FormInput.Workflow = Inputs.Workflow;

export default FormInput;
