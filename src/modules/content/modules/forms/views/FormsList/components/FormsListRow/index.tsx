import React from 'react';

import { DataFormat, Icon } from 'components';

import FormsListContext from '../FormsListContext';

import type { TFormsListRowProps } from './types';

const FormsListRow: React.FC<TFormsListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--title">
      {data.title}
    </td>
    <td className="data-table__cell data-table__cell--publishedAt">
      <DataFormat format="date" value={data.publishedAt} />
    </td>
    <td className="data-table__cell data-table__cell--isPublished">
      {data.isPublished && <Icon name="check" variant="success" />}
      {!data.isPublished && <Icon name="x" variant="muted" />}
    </td>
    <td className="data-table__cell data-table__cell--updatedAt">
      {data.workflow
        ? <DataFormat format="datetime" value={data.workflow.updatedAt} />
        : <em>Нет данных</em>}
    </td>
    <td className="data-table__cell data-table__cell--context">
      <FormsListContext data={data} />
    </td>
  </>
);

export default FormsListRow;
