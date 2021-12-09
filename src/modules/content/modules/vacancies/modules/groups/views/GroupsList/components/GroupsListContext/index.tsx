import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TGroupsListContextProps } from './types';

const GroupsListContext: React.FC<TGroupsListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/vacancies/groups" />
);

export default GroupsListContext;
