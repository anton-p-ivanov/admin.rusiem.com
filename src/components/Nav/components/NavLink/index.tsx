import React from 'react';

import { Icon } from 'components';

import type { TNavLinkProps } from './types';

import './styles.scss';

const NavLink: React.FC<TNavLinkProps> = ({ item }) => (
  <div className="nav-link">
    {item.icon && (
    <div className="nav-link__icon">
      <Icon name={item.icon} size="small" />
    </div>
    )}
    <div className="nav-link__title">{item.title}</div>
  </div>
);

export default NavLink;
