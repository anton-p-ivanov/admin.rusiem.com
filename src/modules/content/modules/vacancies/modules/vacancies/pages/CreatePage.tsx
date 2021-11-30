import * as React from 'react';

import PageView from 'views/PageView';

import VacanciesForm from '../views/VacanciesForm';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <VacanciesForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
