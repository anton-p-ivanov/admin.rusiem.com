import React from 'react';

import './styles.scss';

const SidebarPane: React.FC = () => (
  <div className="sidebar-pane">
    <div className="sidebar-pane__brand">
      <a href="/">Brand Logo</a>
    </div>
    <div className="sidebar-pane__nav">
      Navigation
    </div>
  </div>
);

export default SidebarPane;
