import groupsRoutes from '../modules/groups/config/routes';
import vacanciesRoutes from '../modules/vacancies/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...vacanciesRoutes,
  ...groupsRoutes,
];

export default routes;
