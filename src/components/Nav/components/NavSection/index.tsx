import React from 'react';

import { v4 } from 'uuid';

import NavGroup from '../NavGroup';
import NavHeading from '../NavHeading';
import NavItem from '../NavItem';

import type { TNavSectionProps } from './types';
import './styles.scss';

const NavSection: React.FC<TNavSectionProps> = (props) => {
  const { title, items } = props;

  return (
    <>
      <NavHeading>{title}</NavHeading>
      {items.map((item) => (
        item.items ? <NavGroup item={item} key={v4()} /> : <NavItem item={item} key={v4()} />
      ))}
    </>
  );
};

export default NavSection;
