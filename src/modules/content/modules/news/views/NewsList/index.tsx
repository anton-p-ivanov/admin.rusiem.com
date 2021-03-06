import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import { NewsListFilter } from './components';
import settings from './settings';

import './styles.scss';

const NewsList: React.FC = () => (
  <ListView endpoint="/content/news" columns={settings.columns} templates={settings.templates} />
);

export default withStore(
  withOffCanvas(NewsList, NewsListFilter, 'Параметры фильтрации'),
);
