import React from 'react';

import FormsForm from '@forms/views/FormsForm';
import PageView from 'views/PageView';

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
