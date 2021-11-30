import React from 'react';

import NewsList from '@news/views/NewsList';
import PageView from 'views/PageView';

const ListPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <NewsList />
    </PageView>
  );
};

export default ListPage;
