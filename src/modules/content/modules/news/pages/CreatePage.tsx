import * as React from 'react';

import NewsForm from '@news/views/NewsForm';
import PageView from 'views/PageView';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Пресс-центр :: Новости';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <NewsForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
