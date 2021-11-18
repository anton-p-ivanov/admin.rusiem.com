import React from 'react';

import NewsForm from '@news/views/NewsForm';
import PageView from 'views/PageView';

const EditPage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <NewsForm />
    </PageView>
  );
};

export default EditPage;
