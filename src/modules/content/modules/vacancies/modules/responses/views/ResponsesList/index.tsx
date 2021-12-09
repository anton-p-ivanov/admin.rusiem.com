import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import ResponsesListFilter from './components/ResponsesListFilter';
import settings from './settings';

import './styles.scss';

const ResponsesList: React.FC = () => (
  <ListView
    endpoint="/vacancies/responses"
    columns={settings.columns}
    templates={settings.templates}
  />
);

export default withStore(
  withOffCanvas(ResponsesList, ResponsesListFilter, 'Параметры фильтрации'),
);
