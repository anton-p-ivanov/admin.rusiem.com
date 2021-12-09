import groupsRoutes from '../modules/groups/config/routes';
import responsesRoutes from '../modules/responses/config/routes';
import vacanciesRoutes from '../modules/vacancies/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...groupsRoutes,
  ...vacanciesRoutes,
  ...responsesRoutes,
];

export default routes;
