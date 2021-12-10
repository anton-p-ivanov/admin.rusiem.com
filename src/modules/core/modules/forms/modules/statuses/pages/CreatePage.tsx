import * as React from 'react';

import PageView from 'views/PageView';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Веб-формы :: Статусы';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
    </PageView>
  );
};

export default CreatePage;
