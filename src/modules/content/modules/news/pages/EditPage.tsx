import React from 'react';

import PageView from 'views/PageView';
import WorkflowView from 'views/WorkflowView';

import NewsForm from '../views/NewsForm';

const EditPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <>
      <PageView title={title}>
        <h2>Изменение элемента</h2>
        <NewsForm />
        <WorkflowView />
      </PageView>
    </>
  );
};

export default EditPage;
