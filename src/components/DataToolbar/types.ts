import React from 'react';

import { DataToolbarGroup, DataToolbarItem } from './components';

export type TDataToolbarProps = {
  variant?: string;
};

export type TDataToolbar = React.FC<TDataToolbarProps> & {
  Group: typeof DataToolbarGroup,
  Item: typeof DataToolbarItem,
};
