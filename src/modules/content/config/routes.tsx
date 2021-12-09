import { routes as articlesRoutes } from '../modules/articles/config';
import { routes as formsRoutes } from '../modules/forms/config';
import { routes as newsRoutes } from '../modules/news/config';
import { routes as vacanciesRoutes } from '../modules/vacancies/config';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  ...newsRoutes,
  ...articlesRoutes,
  ...formsRoutes,
  ...vacanciesRoutes,
];

export default routes;
