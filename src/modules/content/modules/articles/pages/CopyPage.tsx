import React from 'react';

import ArticlesForm from '@articles/views/ArticlesForm';
import PageView from 'views/PageView';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Публикации';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <ArticlesForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
