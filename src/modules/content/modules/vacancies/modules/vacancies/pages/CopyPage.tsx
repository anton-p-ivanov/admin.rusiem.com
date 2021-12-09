import React from 'react';

import PageView from 'views/PageView';

import VacanciesForm from '../views/VacanciesForm';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <VacanciesForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
