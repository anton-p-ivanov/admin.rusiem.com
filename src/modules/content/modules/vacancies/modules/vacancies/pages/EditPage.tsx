import React from 'react';

import PageView from 'views/PageView';

import VacanciesForm from '../views/VacanciesForm';

const EditPage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <VacanciesForm />
    </PageView>
  );
};

export default EditPage;
