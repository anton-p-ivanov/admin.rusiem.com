import React from 'react';

import type { TDataTableEmptyProps } from './types';

const DataTableEmpty: React.FC<TDataTableEmptyProps> = ({ span }) => (
  <tr>
    <td colSpan={span}>
      <em>Элементы не найдены</em>
    </td>
  </tr>
);

export default DataTableEmpty;
