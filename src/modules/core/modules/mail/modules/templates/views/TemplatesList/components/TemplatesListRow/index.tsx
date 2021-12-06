import React from 'react';

import { DataFormat } from 'components';

import TemplatesListContext from '../TemplatesListContext';

import type { TTemplatesListRowProps } from './types';

const TemplatesListRow: React.FC<TTemplatesListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--title">
      {data.translations.ru.subject}
    </td>
    <td className="data-table__cell data-table__cell--code">
      {data.code}
    </td>
    <td className="data-table__cell data-table__cell--updatedAt">
      {data.workflow
        ? <DataFormat format="datetime" value={data.workflow.updatedAt} />
        : <em>Нет данных</em>}
    </td>
    <td className="data-table__cell data-table__cell--context">
      <TemplatesListContext data={data} />
    </td>
  </>
);

export default TemplatesListRow;
