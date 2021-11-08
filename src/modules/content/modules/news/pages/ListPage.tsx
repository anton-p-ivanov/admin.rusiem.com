import React from 'react';

import PageView from 'views/PageView';

import NewsList from '../views/NewsList';

const ListPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <NewsList />
    </PageView>
  );
};

export default ListPage;
