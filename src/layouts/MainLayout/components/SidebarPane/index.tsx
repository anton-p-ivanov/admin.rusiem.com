import React from 'react';

import Nav from 'components/Nav';

import logo from 'assets/images/rusiem_black.svg';
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
      <Nav variant="sidebar" items={items} />
    </div>
  </div>
);

export default SidebarPane;
