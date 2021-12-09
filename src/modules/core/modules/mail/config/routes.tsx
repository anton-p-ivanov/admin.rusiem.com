import { routes as templatesRoutes } from '../modules/templates/config';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...templatesRoutes,
];

export default routes;
