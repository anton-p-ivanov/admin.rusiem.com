import React from 'react';

export type TNavItem = {
  title: string;
  icon?: string;
  route?: string;
  items?: TNavItem[];
};

export type TRoute = {
  path: string;
  title: string;
  component: React.FC;
};
