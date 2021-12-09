import * as React from 'react';

import PageView from 'views/PageView';

import GroupsForm from '../views/GroupsForm';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Группы вакансий';

  return (
    <PageView title={title}>
      <h2>Создание нового элемента</h2>
      <GroupsForm isNewElement />
    </PageView>
  );
};

export default CreatePage;
