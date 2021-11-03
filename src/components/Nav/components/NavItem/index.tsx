import React from 'react';
import classNames from 'classnames';

import NavLink from '../NavLink';

import type { TNavItemProps } from './types';
import './styles.scss';

const NavItem = React.forwardRef<HTMLDivElement, TNavItemProps>((props, ref) => {
  const className = classNames('nav__item', props.variant && `nav__item--${props.variant}`);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className={className} ref={ref} onClick={props.onClick} onKeyPress={onKeyPress} role="button" tabIndex={0}>
      <NavLink item={props.item} />
      {props.children}
    </div>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
