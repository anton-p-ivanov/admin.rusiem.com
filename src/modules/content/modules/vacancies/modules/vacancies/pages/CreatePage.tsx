import * as React from 'react';

import PageView from 'views/PageView';

const CreatePage: React.FC = () => {
  const title = 'Контент :: Вакансии';

  return (
    <PageView title={title} />
  );
};

export default CreatePage;
