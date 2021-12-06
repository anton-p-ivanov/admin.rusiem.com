import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const ArticlesListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar createUrl="/content/articles/create" createLabel="Добавить публикацию">
    {children}
  </ListViewToolbar>
);

export default ArticlesListToolbar;
