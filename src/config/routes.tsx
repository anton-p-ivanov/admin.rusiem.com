import * as contentConfig from 'modules/content/config';
import * as coreConfig from 'modules/core/config';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...coreConfig.routes,
  ...contentConfig.routes,
];

export default routes;
