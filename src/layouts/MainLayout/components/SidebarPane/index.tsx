import React from 'react';

import logo from 'assets/images/rusiem_black.svg';
import './styles.scss';

const SidebarPane: React.FC = () => (
  <div className="sidebar-pane">
    <div className="sidebar-pane__brand">
      <a href="/" title="Перейти на главную">
        <img src={logo} alt="RuSIEM Система управления сайтами" width="150" />
      </a>
    </div>
    <div className="sidebar-pane__nav">
      Navigation
    </div>
  </div>
);

export default SidebarPane;
