import React from 'react';

import { ListViewFilter } from 'views/ListView/components';

import fields from './fields';

const VacanciesListFilter: React.FC = () => (
  <ListViewFilter param="vacancies.vacancies.filter" fields={fields} />
);

export default VacanciesListFilter;
