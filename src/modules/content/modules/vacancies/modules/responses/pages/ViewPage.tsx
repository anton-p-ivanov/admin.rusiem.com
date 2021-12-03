import React from 'react';

import PageView from 'views/PageView';

import ResponsesDetails from '../views/ResponsesDetails';

const ViewPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Отклики на вакансии';

  return (
    <PageView title={title}>
      <ResponsesDetails />
    </PageView>
  );
};

export default ViewPage;
