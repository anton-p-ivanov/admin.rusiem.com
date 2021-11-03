import MainPage from '../pages/MainPage';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/',
    title: 'Главная',
    component: MainPage,
  },
];

export default routes;
