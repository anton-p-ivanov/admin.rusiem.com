import React from 'react';

import './styles.scss';

const FormActions: React.FC = ({ children }) => (
  <div className="form__actions">
    {children}
  </div>
);

export default FormActions;
