import React from 'react';

import { v4 } from 'uuid';

import logo from 'assets/images/rusiem_black.svg';
import Nav from 'components/Nav';
import { NavItem, NavSection } from 'components/Nav/components';
import items from 'config/navigation';

import './styles.scss';

const SidebarPane: React.FC = () => (
  <div className="sidebar-pane">
    <div className="sidebar-pane__brand">
      <a href="/" title="Перейти на главную">
        <img src={logo} alt="RuSIEM Система управления сайтами" width="150" />
      </a>
    </div>
    <div className="sidebar-pane__nav">
      <Nav variant="sidebar">
        {items.map((item) => (
          item.items
            ? <NavSection title={item.title} items={item.items} key={v4()} />
            : <NavItem item={item} key={v4()} />
        ))}
      </Nav>
    </div>
  </div>
);

export default SidebarPane;
