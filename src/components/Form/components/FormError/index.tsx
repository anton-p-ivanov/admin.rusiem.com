import React from 'react';

import './styles.scss';

const FormError: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="form__error">{children}</div>
  );
};

export default FormError;
