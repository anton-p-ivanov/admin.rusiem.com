import React from 'react';
import * as Router from 'react-router-dom';

import routes from 'config/routes';
import './styles.scss';

const ContentPane: React.FC = () => (
  <div className="content-pane">
    <Router.Switch>
      {routes.map((route) => (
        <Router.Route key={route.path} path={route.path} exact>
          <route.component />
        </Router.Route>
      ))}
    </Router.Switch>
  </div>
);

export default ContentPane;
