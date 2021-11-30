import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/articles',
    title: 'Список элементов',
    component: React.lazy(() => import('@articles/pages/ListPage')),
  },
  {
    path: '/content/articles/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@articles/pages/CreatePage')),
  },
  {
    path: '/content/articles/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@articles/pages/EditPage')),
  },
  {
    path: '/content/articles/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@articles/pages/CopyPage')),
  },
];

export default routes;
