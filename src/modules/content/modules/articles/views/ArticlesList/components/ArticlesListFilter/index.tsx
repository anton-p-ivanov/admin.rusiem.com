import React from 'react';

import { ListViewFilter } from 'views/ListView/components';

import fields from './fields';

const ArticlesListFilter: React.FC = () => (
  <ListViewFilter param="content.articles.filter" fields={fields} />
);

export default ArticlesListFilter;
