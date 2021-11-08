import React from 'react';

import ListView from 'views/ListView';

import settings from './settings';

const NewsList: React.FC = () => (
  <ListView endpoint="/content/news" columns={settings.columns} templates={settings.templates} />
);

export default NewsList;
