// import React from 'react';

// import { DataViewEmpty } from './components';
// import { TReducerData } from './store/types';
import { TDataColumn } from 'components/DataTable/types';

export type TDataViewProps = {
  data: TDataViewData[];
  columns: TDataViewColumn[];
  templates: TDataViewTemplates;
  variant?: string;
};

export type TDataViewTemplates = {
  // row: React.FC<TDataViewRow>;
  // toolbar: React.FC;
};

// export type TDataView = React.FC<TDataViewProps> & {
//   Empty: typeof DataViewEmpty;
// };

export type TDataViewRow = {
  data: TDataViewData;
};

export type TDataViewData = Record<string, string>;
export type TDataViewColumn = TDataColumn;
