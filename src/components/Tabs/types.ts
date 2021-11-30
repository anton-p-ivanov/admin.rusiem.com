import React from 'react';

export type TTabsItem = {
  label: string;
  component: React.FC
};

export type TTabsProps = {
  items: TTabsItem[];
};
