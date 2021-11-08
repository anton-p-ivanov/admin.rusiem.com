import React from 'react';

import type { TRoute } from 'config/types';

const routes: TRoute[] = [
  {
    path: '/content/articles',
    title: 'Список элементов',
    component: () => <>ListPage</>,
  },
  {
    path: '/content/articles/create',
    title: 'Создание нового элемента',
    component: () => <>CreatePage</>,
  },
  {
    path: '/content/articles/:uuid/edit',
    title: 'Изменение элемента',
    component: () => <>EditPage</>,
  },
  {
    path: '/content/articles/:uuid/copy',
    title: 'Копирование элемента',
    component: () => <>CopyPage</>,
  },
];

export default routes;
