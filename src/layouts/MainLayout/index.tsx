import React from 'react';

import { ContentPane, SidebarPane } from './components';

import './styles.scss';

const MainLayout: React.FC = () => (
  <div className="layout layout--main">
    <div className="layout__sidebar">
      <SidebarPane />
    </div>
    <div className="layout__content">
      <ContentPane />
    </div>
  </div>
);

export default MainLayout;
