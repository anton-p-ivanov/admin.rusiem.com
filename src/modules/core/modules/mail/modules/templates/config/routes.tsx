import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/mail/templates',
    title: 'Список элементов',
    component: React.lazy(() => import('@mail/modules/templates/pages/ListPage')),
  },
  {
    path: '/mail/templates/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@mail/modules/templates/pages/CreatePage')),
  },
  {
    path: '/mail/templates/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@mail/modules/templates/pages/EditPage')),
  },
  {
    path: '/mail/templates/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@mail/modules/templates/pages/CopyPage')),
  },
];

export default routes;
