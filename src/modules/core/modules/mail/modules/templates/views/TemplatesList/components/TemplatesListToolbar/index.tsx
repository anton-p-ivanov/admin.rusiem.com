import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const TemplatesListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar createUrl="/mail/templates/create" createLabel="Добавить шаблон">
    {children}
  </ListViewToolbar>
);

export default TemplatesListToolbar;
