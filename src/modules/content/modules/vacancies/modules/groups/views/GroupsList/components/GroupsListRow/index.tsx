import React from 'react';

import GroupsListContext from '../GroupsListContext';

import type { TGroupsListRowProps } from './types';

const GroupsListRow: React.FC<TGroupsListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--title">
      {data.title}
    </td>
    <td className="data-table__cell data-table__cell--sort">
      {data.sort}
    </td>
    <td className="data-table__cell data-table__cell--context">
      <GroupsListContext data={data} />
    </td>
  </>
);

export default GroupsListRow;
