import React from 'react';

import type { TDataTableEmptyProps } from './types';
import './styles.scss';

const DataTableEmpty: React.FC<TDataTableEmptyProps> = ({ span }) => (
  <tr>
    <td colSpan={span}>
      <div className="data-table__empty">
        <div>Элементы не найдены</div>
      </div>
    </td>
  </tr>
);

export default DataTableEmpty;
