import React from 'react';

import PageView from 'views/PageView';

import TemplatesForm from '../views/TemplatesForm';

const EditPage: React.FC = () => {
  const title = 'Система :: Почтовые шаблоны';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <TemplatesForm />
    </PageView>
  );
};

export default EditPage;
