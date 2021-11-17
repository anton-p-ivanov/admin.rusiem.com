import { PropertiesTab, LinksTab, MetaTab } from './components';

import type { TTabsItem } from 'components/Tabs';

const tabs: TTabsItem[] = [
  {
    label: 'Свойства',
    component: PropertiesTab,
  },
  {
    label: 'Мета-теги',
    component: MetaTab,
  },
  {
    label: 'Внешние ссылки',
    component: LinksTab,
  },
];

export default tabs;
