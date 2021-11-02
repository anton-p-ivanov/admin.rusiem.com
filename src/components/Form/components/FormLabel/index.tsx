import React from 'react';

import { Utils } from 'utils';

import type { TFormLabelProps } from './types';

import './styles.scss';

const FormLabel: React.FC<TFormLabelProps> = (props) => {
  const {
    name,
    variant,
    isRequired = false,
    children,
  } = props;

  const className = Utils.className([
    'form__label',
    isRequired ? 'form__label--required' : undefined,
    variant && `form__label--${variant}`,
  ]);

  return (
    <label className={className} htmlFor={name}>
      {children}
    </label>
  );
};

export default FormLabel;
