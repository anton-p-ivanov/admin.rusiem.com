import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const GroupsListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar
    createUrl="/content/vacancies/groups/create"
    createLabel="Добавить группу"
    withFilter={false}
  >
    {children}
  </ListViewToolbar>
);

export default GroupsListToolbar;
