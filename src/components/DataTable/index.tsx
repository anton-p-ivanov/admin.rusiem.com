import React from 'react';

import classNames from 'classnames';

import { DataTableEmpty, DataTableHeader, DataTableRow } from './components';

import type { TDataTable } from './types';

import './styles.scss';

const DataTable: TDataTable = (props) => {
  const { columns, variant, children } = props;
  const className = classNames('data-table', variant && `data-table--${variant}`);

  return (
    <table className={className}>
      {columns && (
        <>
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
        </>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

DataTable.Row = DataTableRow;
DataTable.Empty = DataTableEmpty;

export default DataTable;
