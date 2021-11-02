import React from 'react';

import { Utils } from 'utils';

import FormError from '../FormError';
import FormHint from '../FormHint';
import FormInput from '../FormInput';
import FormLabel from '../FormLabel';

import type { TFormFieldProps } from './types';

import './styles.scss';

const FormField: React.FC<TFormFieldProps> = (props) => {
  const { field, variant, children } = props;

  const className = Utils.className([
    'form__field',
    field.type && `form__field--${field.type}`,
    field.errors && 'form__field--invalid',
    variant && `form__field--${variant}`,
  ]);

  return (
    <div className={className}>
      {field.label && (
        <FormLabel name={field.name} isRequired={field.isRequired} variant={field.type}>
          {field.label}
        </FormLabel>
      )}
      {children || <FormInput field={field} />}
      {field.hint && <FormHint>{field.hint}</FormHint>}
      {field.errors && <FormError>{field.errors.join('<br>')}</FormError>}
    </div>
  );
};

export type { TFormField, TFormFields } from './types';

export default FormField;
