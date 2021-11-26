import React from 'react';

import ArticlesForm from '@articles/views/ArticlesForm';
import PageView from 'views/PageView';

const EditPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <ArticlesForm />
    </PageView>
  );
};

export default EditPage;
