import vacanciesRoutes from '../modules/vacancies/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...vacanciesRoutes,
];

export default routes;
