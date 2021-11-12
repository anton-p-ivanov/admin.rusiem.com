import React from 'react';

import PageView from 'views/PageView';

import NewsForm from '../views/NewsForm';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <NewsForm />
    </PageView>
  );
};

export default CopyPage;
