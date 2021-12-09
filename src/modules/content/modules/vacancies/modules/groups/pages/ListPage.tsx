import React from 'react';

import PageView from 'views/PageView';

import GroupsList from '../views/GroupsList';

const ListPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Группы вакансий';

  return (
    <PageView title={title}>
      <GroupsList />
    </PageView>
  );
};

export default ListPage;
