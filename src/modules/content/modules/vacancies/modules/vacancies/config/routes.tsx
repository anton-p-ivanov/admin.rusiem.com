import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/vacancies',
    title: 'Список элементов',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/ListPage')),
  },
  {
    path: '/content/vacancies/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/CreatePage')),
  },
  {
    path: '/content/vacancies/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/EditPage')),
  },
  {
    path: '/content/vacancies/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/CopyPage')),
  },
];

export default routes;
