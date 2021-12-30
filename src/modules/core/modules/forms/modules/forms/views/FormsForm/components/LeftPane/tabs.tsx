import React from 'react';

import { PropertiesTab, StatusesTab } from './components';

import type { TTabsItem } from 'components/Tabs';

const tabs: TTabsItem[] = [
  {
    label: 'Веб-форма',
    component: <PropertiesTab />,
  },
  {
    label: 'Статусы',
    component: <StatusesTab />,
  },
];

export default tabs;
