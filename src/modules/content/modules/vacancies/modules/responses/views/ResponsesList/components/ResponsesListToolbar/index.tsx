import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const ResponsesListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar>
    {children}
  </ListViewToolbar>
);

export default ResponsesListToolbar;
