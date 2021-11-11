import React from 'react';

import { TDataFormatProps } from './types';

const DataFormat: React.FC<TDataFormatProps> = (props) => {
  const { format, value } = props;

  switch (format) {
    case 'date':
    case 'datetime':
      return (
        <>
          {new Intl.DateTimeFormat('ru', {
            dateStyle: 'medium',
            timeStyle: format === 'date' ? undefined : 'short',
          }).format(new Date(value))}
        </>
      );
    default:
      return <>{value}</>;
  }
};

export default DataFormat;
