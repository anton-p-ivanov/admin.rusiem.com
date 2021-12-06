import { routes as mailRoutes } from '../modules/mail/config';
import MainPage from '../pages/MainPage';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/',
    title: 'Главная',
    component: MainPage,
  },
  ...mailRoutes,
];

export default routes;
