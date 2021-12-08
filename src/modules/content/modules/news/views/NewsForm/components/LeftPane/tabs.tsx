import React from 'react';

import { PropertiesTab, MetaTab } from './components';

import type { TTabsItem } from 'components/Tabs';

const tabs: TTabsItem[] = [
  {
    label: 'Свойства',
    component: <PropertiesTab />,
  },
  {
    label: 'Мета-теги',
    component: <MetaTab />,
  },
];

export default tabs;
