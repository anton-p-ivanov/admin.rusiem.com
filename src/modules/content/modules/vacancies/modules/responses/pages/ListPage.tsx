import React from 'react';

import PageView from 'views/PageView';

import ResponsesList from '../views/ResponsesList';

const ListPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Отклики на вакансии';

  return (
    <PageView title={title}>
      <ResponsesList />
    </PageView>
  );
};

export default ListPage;
