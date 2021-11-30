import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import classNames from 'classnames';

import { Icon } from 'components';

import type { TNavLinkProps } from './types';

import './styles.scss';

const NavLink: React.FC<TNavLinkProps> = ({ item }) => {
  const linkClassName = (props: { isActive: boolean }) => (
    classNames('nav-link__link', props.isActive && 'nav-link__link--active')
  );

  return (
    <div className="nav-link">
      {item.icon && (
        <div className="nav-link__icon">
          <Icon name={item.icon} size="small" />
        </div>
      )}
      {item.route ? (
        <Link to={item.route} className={linkClassName}>
          {item.title}
        </Link>
      ) : (
        <div className="nav-link__title">{item.title}</div>
      )}
    </div>
  );
};

export default NavLink;
