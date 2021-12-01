import React from 'react';

import ListView, { withStore } from 'views/ListView';

import settings from './settings';

import './styles.scss';

const GroupsList: React.FC = () => (
  <ListView
    endpoint="/vacancies/groups"
    sort={{ sortBy: 'title', sortOrder: 'ASC' }}
    columns={settings.columns}
    templates={settings.templates}
  />
);

export default withStore(GroupsList);
