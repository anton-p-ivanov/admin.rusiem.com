import React from 'react';

import PageView from 'views/PageView';

import StatusesForm from '../views/StatusesForm';

const EditPage: React.FC = () => {
  const title = 'Контент :: Веб-формы :: Статусы';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <StatusesForm />
    </PageView>
  );
};

export default EditPage;
