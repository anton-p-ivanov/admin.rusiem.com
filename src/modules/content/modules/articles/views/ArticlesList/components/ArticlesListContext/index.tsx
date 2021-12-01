import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TArticlesListContextProps } from './types';

const ArticlesListContext: React.FC<TArticlesListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/articles" />
);

export default ArticlesListContext;
