import React from 'react';

import classNames from 'classnames';

import { TDataTableHeaderProps } from './types';

const DataTableHeader: React.FC<TDataTableHeaderProps> = ({ column }) => {
  const { name, title } = column;
  const className = classNames({
    'data-table__header': true,
    [`data-table__header--${name}`]: true,
  });

  return (
    <th className={className} key={`data-header-${name}`}>
      {title}
    </th>
  );
};

export default DataTableHeader;
