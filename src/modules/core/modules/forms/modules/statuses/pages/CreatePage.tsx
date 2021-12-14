import * as React from 'react';

import PageView from 'views/PageView';

import StatusesForm from '../views/StatusesForm';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Веб-формы :: Статусы';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <StatusesForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
