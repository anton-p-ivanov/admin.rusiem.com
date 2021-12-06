import React from 'react';

import ListView, { withStore } from 'views/ListView';
import withOffCanvas from 'wrappers/withOffCanvas';

import { TemplatesListFilter } from './components';
import settings from './settings';

import './styles.scss';

const TemplatesList: React.FC = () => (
  <ListView endpoint="/mail/templates" columns={settings.columns} templates={settings.templates} />
);

export default withStore(
  withOffCanvas(TemplatesList, TemplatesListFilter, 'Параметры фильтрации'),
);
