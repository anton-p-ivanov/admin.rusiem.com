import React from 'react';

import './styles.scss';

const FormHint: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="form__hint">{children}</div>
  );
};

export default FormHint;
