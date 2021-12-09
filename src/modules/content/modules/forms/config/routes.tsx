import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/forms',
    title: 'Список элементов',
    component: React.lazy(() => import('@forms/pages/ListPage')),
  },
  {
    path: '/content/forms/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@forms/pages/CreatePage')),
  },
  {
    path: '/content/forms/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@forms/pages/EditPage')),
  },
  {
    path: '/content/forms/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@forms/pages/CopyPage')),
  },
];

export default routes;
