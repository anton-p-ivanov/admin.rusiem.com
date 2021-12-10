import React from 'react';

import PageView from 'views/PageView';

import FormsForm from '../views/FormsForm';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Веб-формы';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <FormsForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
