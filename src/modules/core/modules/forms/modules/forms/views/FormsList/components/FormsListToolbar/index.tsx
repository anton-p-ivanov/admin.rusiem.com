import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const FormsListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar createUrl="/forms/create" createLabel="Добавить веб-форму">
    {children}
  </ListViewToolbar>
);

export default FormsListToolbar;
