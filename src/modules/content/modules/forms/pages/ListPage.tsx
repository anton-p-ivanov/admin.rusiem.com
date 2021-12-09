import React from 'react';

import FormsList from '@forms/views/FormsList';
import PageView from 'views/PageView';

const ListPage: React.FC = () => {
  const title = 'Контент :: Веб-формы';

  return (
    <PageView title={title}>
      <FormsList />
    </PageView>
  );
};

export default ListPage;
