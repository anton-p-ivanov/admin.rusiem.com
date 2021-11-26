import * as React from 'react';

import ArticlesForm from '@articles/views/ArticlesForm';
import PageView from 'views/PageView';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Публикации';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <ArticlesForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
