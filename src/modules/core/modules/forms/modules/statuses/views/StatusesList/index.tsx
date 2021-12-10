import React from 'react';
import { useParams } from 'react-router-dom';

import ListView, { withStore } from 'views/ListView';

import settings from './settings';

import './styles.scss';

const StatusesList: React.FC = () => {
  const { uuid = 'unknown' } = useParams();

  return (
    <ListView
      endpoint={`/forms/${uuid}/statuses`}
      columns={settings.columns}
      templates={settings.templates}
      sort={{ sortBy: 'title', sortOrder: 'ASC' }}
    />
  );
};

export default withStore(StatusesList);
