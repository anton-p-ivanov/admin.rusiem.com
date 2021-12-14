import React from 'react';

import PageView from 'views/PageView';

import FormsList from '../views/FormsList';

const ListPage: React.FC = () => {
  const title = 'Контент :: Веб-формы';

  return (
    <PageView title={title}>
      <FormsList />
    </PageView>
  );
};

export default ListPage;
