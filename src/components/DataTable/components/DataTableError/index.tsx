import React from 'react';

import type { TDataTableErrorProps } from './types';
import './styles.scss';

const DataTableError: React.FC<TDataTableErrorProps> = ({ span, children }) => (
  <tr>
    <td colSpan={span}>
      <div className="data-table__error">
        {children || 'К сожалению загрузить данные не удалось'}
      </div>
    </td>
  </tr>
);

export default DataTableError;
