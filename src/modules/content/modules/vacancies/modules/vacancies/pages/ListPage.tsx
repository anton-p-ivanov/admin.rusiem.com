import React from 'react';

import PageView from 'views/PageView';

import VacanciesList from '../views/VacanciesList';

const ListPage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title}>
      <VacanciesList />
    </PageView>
  );
};

export default ListPage;
