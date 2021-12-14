import formsRoutes from '../modules/forms/config/routes';
import statusesRoutes from '../modules/statuses/config/routes';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...formsRoutes,
  ...statusesRoutes,
];

export default routes;
