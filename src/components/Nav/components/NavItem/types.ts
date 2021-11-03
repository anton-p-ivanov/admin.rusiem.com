import React from 'react';
import { TNavItem } from 'config/types';

export type TNavItemProps = {
  item: TNavItem;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactChild;
};
