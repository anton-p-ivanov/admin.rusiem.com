import React from 'react';

import PageView from 'views/PageView';

import StatusesForm from '../views/StatusesForm';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Веб-формы :: Статусы';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <StatusesForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
