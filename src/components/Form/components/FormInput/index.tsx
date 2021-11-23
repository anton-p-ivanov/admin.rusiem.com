import React from 'react';

import * as Input from './components';
import { TChoiceField } from './components/Choices/types';

import type { TFormField } from '../FormField';
import type { TCollectionField } from './components/Collection/types';
import type { TFileField } from './components/File/types';
import type { TNumberField } from './components/Number/types';
import type { TSelectField } from './components/Select/types';
import type { TTextField } from './components/Text/types';
import type { TTextAreaField } from './components/TextArea/types';
import type { TFormInputProps } from './types';

import './styles.scss';

type TFormInput = React.FC<TFormInputProps> & {
  Checkbox: typeof Input.Checkbox;
  Choices: typeof Input.Choices;
  Collection: typeof Input.Collection;
  Date: typeof Input.Date;
  DateTime: typeof Input.DateTime;
  File: typeof Input.File;
  Number: typeof Input.Number;
  Password: typeof Input.Password;
  Select: typeof Input.Select;
  Text: typeof Input.Text;
  TextArea: typeof Input.TextArea;
};

const FormInput: TFormInput = (props) => {
  const { field } = props;

  switch (field.type) {
    case 'checkbox':
      return <Input.Checkbox field={field as TFormField<boolean>} />;
    case 'choices':
      return <Input.Choices field={field as TChoiceField} />;
    case 'collection':
      return <Input.Collection field={field as TCollectionField} />;
    case 'date':
      return <Input.Date field={field as TTextField} ref={field.ref} />;
    case 'datetime':
      return <Input.DateTime field={field as TTextField} ref={field.ref} />;
    case 'file':
      return <Input.File field={field as TFileField} />;
    case 'number':
      return <Input.Number field={field as TNumberField} ref={field.ref} />;
    case 'password':
      return <Input.Password field={field as TTextField} ref={field.ref} />;
    case 'select':
      return <Input.Select field={field as TSelectField} />;
    case 'textarea':
      return <Input.TextArea field={field as TTextAreaField} />;
    default:
      return (
        <Input.Text field={field as TTextField} ref={field.ref} />
      );
  }
};

// // FormInput.Boolean = Inputs.Boolean;
FormInput.Checkbox = Input.Checkbox;
FormInput.Choices = Input.Choices;
FormInput.Collection = Input.Collection;
FormInput.Date = Input.Date;
FormInput.File = Input.File;
FormInput.DateTime = Input.DateTime;
FormInput.Number = Input.Number;
FormInput.Password = Input.Password;
// // FormInput.Roles = Inputs.Roles;
FormInput.Select = Input.Select;
// // FormInput.Sites = Inputs.Sites;
FormInput.Text = Input.Text;
FormInput.TextArea = Input.TextArea;
// // FormInput.Workflow = Inputs.Workflow;

export default FormInput;
