import React from 'react';

import type { TDataEntity } from 'config/types';

export type TListViewContextProps = {
  data: TDataEntity;
  baseUrl: string;
  children?: (value: TListViewContextContext) => React.ReactNode;
};

export type TListViewContextContext = {
  remove: () => void;
};
