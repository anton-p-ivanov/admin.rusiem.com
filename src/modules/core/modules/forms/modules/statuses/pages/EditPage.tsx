import React from 'react';

import PageView from 'views/PageView';

const EditPage: React.FC = () => {
  const title = 'Контент :: Веб-формы :: Статусы';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
    </PageView>
  );
};

export default EditPage;
