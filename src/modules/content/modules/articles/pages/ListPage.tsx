import React from 'react';

import ArticlesList from '@articles/views/ArticlesList';
import PageView from 'views/PageView';

const ListPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <ArticlesList />
    </PageView>
  );
};

export default ListPage;
