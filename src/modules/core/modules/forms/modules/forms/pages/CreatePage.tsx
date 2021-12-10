import * as React from 'react';

import PageView from 'views/PageView';

import FormsForm from '../views/FormsForm';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Веб-формы';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <FormsForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
