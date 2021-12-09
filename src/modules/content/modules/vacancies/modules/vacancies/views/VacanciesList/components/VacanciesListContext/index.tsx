import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TVacanciesListContextProps } from './types';

const VacanciesListContext: React.FC<TVacanciesListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/vacancies" />
);

export default VacanciesListContext;
