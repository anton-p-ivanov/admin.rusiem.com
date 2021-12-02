import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TResponsesListContextProps } from './types';

const ResponsesListContext: React.FC<TResponsesListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/vacancies/responses" />
);

export default ResponsesListContext;
