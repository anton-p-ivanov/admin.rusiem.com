import React from 'react';

import { v4 } from 'uuid';

import type { TDataTableLoadingProps } from './types';
import './styles.scss';

const DataTableLoading: React.FC<TDataTableLoadingProps> = ({ span, rows = 20 }) => {
  const cells = Array.from({ length: span }, () => (
    <td className="data-table__cell data-table__cell--loading" key={v4()}><span>&nbsp;</span></td>
  ));

  return (
    <>
      {Array.from({ length: rows }, () => (
        <tr key={v4()}>{cells}</tr>
      ))}
    </>
  );
};

export default DataTableLoading;
