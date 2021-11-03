import React from 'react';

import './styles.scss';

const NavHeading: React.FC = ({ children }) => (
  <div className="nav__item nav__item--heading">
    {children}
  </div>
);

export default NavHeading;
