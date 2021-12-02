import type { TNavItem } from 'config/types';

const navigation: TNavItem[] = [
  {
    title: 'Вакансии',
    icon: 'database',
    items: [
      {
        title: 'Список вакансий',
        route: '/content/vacancies/vacancies',
      },
      {
        title: 'Группы вакансий',
        route: '/content/vacancies/groups',
      },
      {
        title: 'Отклики на вакансии',
        route: '/content/vacancies/responses',
      },
    ],
  },
];

export default navigation;
