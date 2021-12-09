import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import { VacanciesListFilter } from './components';
import settings from './settings';

import './styles.scss';

const VacanciesList: React.FC = () => (
  <ListView endpoint="/vacancies" columns={settings.columns} templates={settings.templates} />
);

export default withStore(
  withOffCanvas(VacanciesList, VacanciesListFilter, 'Параметры фильтрации'),
);
