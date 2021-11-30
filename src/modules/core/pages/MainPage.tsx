import React from 'react';

import PageView from 'views/PageView';

const MainPage: React.FC = () => {
  const title = 'Page header title';

  return (
    <PageView title={title}>
      Page content
    </PageView>
  );
};

export default MainPage;
