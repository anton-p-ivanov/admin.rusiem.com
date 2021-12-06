import React from 'react';

import Loading from 'components/Loading';

import type { TDataTableLoadingProps } from './types';
import './styles.scss';

const DataTableLoading: React.FC<TDataTableLoadingProps> = ({ span }) => (
  <tr>
    <td colSpan={span}>
      <div className="data-table__loading"><Loading /></div>
    </td>
  </tr>
);

export default DataTableLoading;
