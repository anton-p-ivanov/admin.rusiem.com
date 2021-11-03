import React from 'react';
import * as Router from 'react-router-dom';

import { ContentPane, SidebarPane } from './components';

import './styles.scss';

const MainLayout: React.FC = () => (
  <Router.BrowserRouter>
    <div className="layout layout--main">
      <div className="layout__sidebar">
        <SidebarPane />
      </div>
      <div className="layout__content">
        <ContentPane />
      </div>
    </div>
  </Router.BrowserRouter>
);

export default MainLayout;
