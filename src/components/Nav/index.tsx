import React from 'react';

import classNames from 'classnames';

import type { TNavProps } from './types';

import './styles.scss';

const Nav: React.FC<TNavProps> = (props) => {
  const { variant, children } = props;

  const className = classNames('nav', variant && `nav--${variant}`);

  return (
    <nav className={className}>
      {children}
    </nav>
  );
};

export default Nav;
