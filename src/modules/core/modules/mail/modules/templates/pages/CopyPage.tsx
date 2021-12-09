import React from 'react';

import PageView from 'views/PageView';

import TemplatesForm from '../views/TemplatesForm';

const CopyPage: React.FC = () => {
  const title = 'Система :: Почтовые шаблоны';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <TemplatesForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
