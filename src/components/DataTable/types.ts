import React from 'react';

import type { TDataTableEmptyProps } from './components/DataTableEmpty/types';
import type { TDataTableErrorProps } from './components/DataTableError/types';
import type { TDataTableLoadingProps } from './components/DataTableLoading/types';
import type { TDataTableRowProps } from './components/DataTableRow/types';

export type TDataColumn = {
  name: string;
  title: string;
};

export type TDataTableProps = {
  columns?: TDataColumn[];
  variant?: string;
};

export type TDataTable = React.FC<TDataTableProps> & {
  Row: React.FC<TDataTableRowProps>;
  Empty: React.FC<TDataTableEmptyProps>;
  Loading: React.FC<TDataTableLoadingProps>;
  Error: React.FC<TDataTableErrorProps>;
};
