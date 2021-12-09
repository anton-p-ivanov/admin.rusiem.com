import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/vacancies/groups',
    title: 'Список элементов',
    component: React.lazy(() => import('@vacancies/modules/groups/pages/ListPage')),
  },
  {
    path: '/content/vacancies/groups/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@vacancies/modules/groups/pages/CreatePage')),
  },
  {
    path: '/content/vacancies/groups/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@vacancies/modules/groups/pages/EditPage')),
  },
  {
    path: '/content/vacancies/groups/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@vacancies/modules/groups/pages/CopyPage')),
  },
];

export default routes;
