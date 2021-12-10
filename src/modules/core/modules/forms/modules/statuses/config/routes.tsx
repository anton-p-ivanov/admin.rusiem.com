import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/forms/:uuid/statuses',
    title: 'Список элементов',
    component: React.lazy(() => import('../pages/ListPage')),
  },
  {
    path: '/forms/:uuid/statuses/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('../pages/CreatePage')),
  },
  {
    path: '/forms/statuses/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('../pages/EditPage')),
  },
  {
    path: '/forms/statuses/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('../pages/CopyPage')),
  },
];

export default routes;
