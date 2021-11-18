import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/news',
    title: 'Список элементов',
    component: React.lazy(() => import('@news/pages/ListPage')),
  },
  {
    path: '/content/news/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@news/pages/CreatePage')),
  },
  {
    path: '/content/news/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@news/pages/EditPage')),
  },
  {
    path: '/content/news/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@news/pages/CopyPage')),
  },
];

export default routes;
