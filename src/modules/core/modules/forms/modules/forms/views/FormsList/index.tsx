import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import { FormsListFilter } from './components';
import settings from './settings';

import './styles.scss';

const FormsList: React.FC = () => (
  <ListView endpoint="/forms" columns={settings.columns} templates={settings.templates} />
);

export default withStore(
  withOffCanvas(FormsList, FormsListFilter, 'Параметры фильтрации'),
);
