import { navigation as formsNavigation } from '../modules/forms/config';
import { navigation as mailNavigation } from '../modules/mail/config';

import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  {
    title: 'Главная панель',
    icon: 'home',
    route: '/',
  },
  {
    title: 'Система',
    items: [
      ...mailNavigation,
      ...formsNavigation,
    ],
  },
];

export default navigation;
