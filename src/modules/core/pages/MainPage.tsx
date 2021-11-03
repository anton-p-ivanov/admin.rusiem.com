import React from 'react';

import PageView from 'views/PageView';

const MainPage: React.FC = () => {
  const title = 'Page header title';

  return (
    <PageView title={title}>
      <div style={{ height: '100px' }}>Page content</div>
    </PageView>
  );
};

export default MainPage;
