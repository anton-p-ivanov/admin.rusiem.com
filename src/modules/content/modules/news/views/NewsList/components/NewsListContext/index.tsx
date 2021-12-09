import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TNewsListContextProps } from './types';

const NewsListContext: React.FC<TNewsListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/news" />
);

export default NewsListContext;
