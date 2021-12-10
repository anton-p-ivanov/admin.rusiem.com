import React from 'react';

import PageView from 'views/PageView';

import FormsForm from '../views/FormsForm';

const EditPage: React.FC = () => {
  const title = 'Контент :: Веб-формы';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <FormsForm />
    </PageView>
  );
};

export default EditPage;
