import React from 'react';

import { Icon } from 'components/index';

import StatusesListContext from '../StatusesListContext';

import type { TStatusesListRowProps } from './types';

const StatusesListRow: React.FC<TStatusesListRowProps> = ({ data }) => (
  <>
    <td className="data-table__cell data-table__cell--title">
      {data.translations.ru.title}
    </td>
    <td className="data-table__cell data-table__cell--name">
      {data.name}
    </td>
    <td className="data-table__cell data-table__cell--isDefault">
      {data.isDefault ? <Icon name="check" variant="success" /> : <Icon name="x" variant="muted" />}
    </td>
    <td className="data-table__cell data-table__cell--context">
      <StatusesListContext data={data} />
    </td>
  </>
);

export default StatusesListRow;
