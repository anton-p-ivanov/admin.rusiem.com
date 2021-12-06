import React from 'react';

import PageView from 'views/PageView';

const CopyPage: React.FC = () => {
  const title = 'Система :: Почтовые шаблоны';

  return (
    <PageView title={title}>
      <h2>Копирование элемента</h2>
    </PageView>
  );
};

export default CopyPage;
