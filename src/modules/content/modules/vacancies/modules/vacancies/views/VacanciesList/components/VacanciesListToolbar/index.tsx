import React from 'react';

import { ListViewToolbar } from 'views/ListView/components';

const VacanciesListToolbar: React.FC = ({ children }) => (
  <ListViewToolbar createUrl="/content/vacancies/vacancies/create" createLabel="Добавить вакансию">
    {children}
  </ListViewToolbar>
);

export default VacanciesListToolbar;
