import React from 'react';

import PageView from 'views/PageView';

const ListPage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title}>
      {title}
    </PageView>
  );
};

export default ListPage;
