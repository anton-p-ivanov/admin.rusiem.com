import React from 'react';

import { DataTableEmpty, DataTableHeader, DataTableRow } from './components';

import type { TDataTable } from './types';

import './styles.scss';

const DataTable: TDataTable = (props) => {
  const { columns, children } = props;

  return (
    <table className="data-table">
      <colgroup>
        {columns.map((column) => (
          <col
            key={`data-column-${column.name}`}
            className={`data-table__col data-table__col--${column.name}`}
          />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((column) => (
            <DataTableHeader column={column} key={`data-header-${column.name}`} />
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

DataTable.Row = DataTableRow;
DataTable.Empty = DataTableEmpty;

export default DataTable;
