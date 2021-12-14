import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/forms',
    title: 'Список элементов',
    component: React.lazy(() => import('../pages/ListPage')),
  },
  {
    path: '/forms/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('../pages/CreatePage')),
  },
  {
    path: '/forms/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('../pages/EditPage')),
  },
  {
    path: '/forms/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('../pages/CopyPage')),
  },
];

export default routes;
