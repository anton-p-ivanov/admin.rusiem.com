import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/vacancies/vacancies',
    title: 'Список элементов',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/ListPage')),
  },
  {
    path: '/content/vacancies/vacancies/create',
    title: 'Создание нового элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/CreatePage')),
  },
  {
    path: '/content/vacancies/vacancies/:uuid/edit',
    title: 'Изменение элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/EditPage')),
  },
  {
    path: '/content/vacancies/vacancies/:uuid/copy',
    title: 'Копирование элемента',
    component: React.lazy(() => import('@vacancies/modules/vacancies/pages/CopyPage')),
  },
];

export default routes;
