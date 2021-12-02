import React from 'react';

import PageView from 'views/PageView';

const ViewPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Отклики на вакансии';

  return (
    <PageView title={title}>
      <h2>Список откликов на вакансию</h2>
    </PageView>
  );
};

export default ViewPage;
