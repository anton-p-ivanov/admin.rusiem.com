import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import { ArticlesListFilter } from './components';
import settings from './settings';

import './styles.scss';

const ArticlesList: React.FC = () => (
  <ListView endpoint="/content/articles" columns={settings.columns} templates={settings.templates} />
);

export default withStore(
  withOffCanvas(ArticlesList, ArticlesListFilter, 'Параметры фильтрации'),
);
