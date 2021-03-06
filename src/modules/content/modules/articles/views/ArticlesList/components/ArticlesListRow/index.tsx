import React from 'react';

import { DataFormat, Icon } from 'components';

import ArticlesListContext from '../ArticlesListContext';

import type { TArticlesListRowProps } from './types';

const ArticlesListRow: React.FC<TArticlesListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--title">
      {data.title}
    </td>
    <td className="data-table__cell data-table__cell--publishedAt">
      <DataFormat format="date" value={data.publishedAt} />
    </td>
    <td className="data-table__cell data-table__cell--locale">
      {data.locale.toUpperCase()}
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
      <ArticlesListContext data={data} />
    </td>
  </>
);

export default ArticlesListRow;
