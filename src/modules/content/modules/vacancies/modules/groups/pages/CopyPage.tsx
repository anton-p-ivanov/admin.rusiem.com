import React from 'react';

import PageView from 'views/PageView';

import GroupsForm from '../views/GroupsForm';

const CopyPage: React.FC = () => {
  const title = 'Контент :: Вакансии :: Группы вакансий';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
      <GroupsForm isNewElement />
    </PageView>
  );
};

export default CopyPage;
