import React from 'react';

import PageView from 'views/PageView';

import TemplatesList from '../views/TemplatesList';

const ListPage: React.FC = () => {
  const title = 'Система :: Почтовые шаблоны';

  return (
    <PageView title={title}>
      <TemplatesList />
    </PageView>
  );
};

export default ListPage;
