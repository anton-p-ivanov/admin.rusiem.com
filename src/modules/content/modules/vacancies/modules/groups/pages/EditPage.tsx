import React from 'react';

import PageView from 'views/PageView';

import GroupsForm from '../views/GroupsForm';

const EditPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Группы вакансий';

  return (
    <PageView title={title}>
      <h2>Изменение элемента</h2>
      <GroupsForm />
    </PageView>
  );
};

export default EditPage;
