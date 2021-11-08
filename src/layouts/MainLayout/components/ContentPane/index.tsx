import React from 'react';
import * as Router from 'react-router-dom';

import routes from 'config/routes';
import './styles.scss';

const ContentPane: React.FC = () => (
  <div className="content-pane">
    <React.Suspense fallback="Loading ...">
      <Router.Routes>
        {routes.map((route) => (
          <Router.Route
            key={route.path}
            path={route.path}
            element={<route.component title={route.title} />}
          />
        ))}
      </Router.Routes>
    </React.Suspense>
  </div>
);

export default ContentPane;
