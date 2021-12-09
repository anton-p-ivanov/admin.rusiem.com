import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/vacancies/responses',
    title: 'Список элементов',
    component: React.lazy(() => import('@vacancies/modules/responses/pages/ListPage')),
  },
  {
    path: '/content/vacancies/responses/:uuid/view',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@vacancies/modules/responses/pages/ViewPage')),
  },
];

export default routes;
