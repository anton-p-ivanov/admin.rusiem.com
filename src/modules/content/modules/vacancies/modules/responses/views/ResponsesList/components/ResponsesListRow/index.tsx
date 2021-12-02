import React from 'react';

import { DataFormat } from 'components';

import ResponsesListContext from '../ResponsesListContext';

import type { TResponsesListRowProps } from './types';

const ResponsesListRow: React.FC<TResponsesListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--vacancy">
      {data.vacancy.title}
    </td>
    <td className="data-table__cell data-table__cell--fullName">
      {data.fullName}
    </td>
    <td className="data-table__cell data-table__cell--email">
      {data.email}
    </td>
    <td className="data-table__cell data-table__cell--phone">
      {data.phone}
    </td>
    <td className="data-table__cell data-table__cell--updatedAt">
      {data.workflow
        ? <DataFormat format="datetime" value={data.workflow.updatedAt} />
        : <em>Нет данных</em>}
    </td>
    <td className="data-table__cell data-table__cell--context">
      <ResponsesListContext data={{ ...data, title: data.fullName }} />
    </td>
  </>
);

export default ResponsesListRow;
