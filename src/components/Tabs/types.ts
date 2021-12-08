import React from 'react';

export type TTabsItem = {
  label: string;
  component: React.FC | JSX.Element
};

export type TTabsProps = {
  items: TTabsItem[];
  variant?: string;
};
