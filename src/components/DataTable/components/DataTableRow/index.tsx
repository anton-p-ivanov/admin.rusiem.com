import React from 'react';

import classNames from 'classnames';

import { TDataTableRowProps } from './types';

const DataRow: React.FC<TDataTableRowProps> = (props) => {
  const { template, isDisabled = false } = props;

  const className = classNames({
    'data-table__row': true,
    'data-table__row--disabled': isDisabled,
  });

  return (
    <tr className={className}>
      {template}
    </tr>
  );
};

export default DataRow;
