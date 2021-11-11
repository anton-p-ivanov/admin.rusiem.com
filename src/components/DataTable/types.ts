import React from 'react';

import type { TDataTableEmptyProps } from './components/DataTableEmpty/types';
import type { TDataTableRowProps } from './components/DataTableRow/types';

export type TDataColumn = {
  name: string;
  title: string;
};

export type TDataTableProps = {
  columns: TDataColumn[];
};

export type TDataTable = React.FC<TDataTableProps> & {
  Row: React.FC<TDataTableRowProps>;
  Empty: React.FC<TDataTableEmptyProps>;
};
