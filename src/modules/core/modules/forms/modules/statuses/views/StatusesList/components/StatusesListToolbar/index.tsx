import React from 'react';
import { useParams } from 'react-router-dom';

import { ListViewToolbar } from 'views/ListView/components';

const StatusesListToolbar: React.FC = ({ children }) => {
  const { form = 'unknown' } = useParams();

  return (
    <ListViewToolbar createUrl={`/forms/${form}/statuses/create`} createLabel="Добавить статус" withFilter={false}>
      {children}
    </ListViewToolbar>
  );
};

export default StatusesListToolbar;
