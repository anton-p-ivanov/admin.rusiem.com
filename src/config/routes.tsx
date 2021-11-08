import type { TRoute } from 'config/types';
import * as contentConfig from 'modules/content/config';
import * as coreConfig from 'modules/core/config';

const routes: TRoute[] = [
  ...coreConfig.routes,
  ...contentConfig.routes,
];

export default routes;
