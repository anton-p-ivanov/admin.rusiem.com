import { navigation as articlesNavigation } from '../modules/articles/config';
import { navigation as newsNavigation } from '../modules/news/config';
import { navigation as vacanciesNavigation } from '../modules/vacancies/config';

import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  {
    title: 'Контент',
    items: [
      {
        title: 'Пресс-центр',
        icon: 'database',
        items: [
          ...newsNavigation,
          ...articlesNavigation,
        ],
      },
      ...vacanciesNavigation,
    ],
  },
];

export default navigation;
