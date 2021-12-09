import * as React from 'react';

import PageView from 'views/PageView';

import TemplatesForm from '../views/TemplatesForm';

const CreatePage: React.FC = () => {
  const title = 'Система :: Почтовые шаблоны';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <TemplatesForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
