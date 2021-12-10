import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TStatusesListContextProps } from './types';

const StatusesListContext: React.FC<TStatusesListContextProps> = ({ data }) => (
  <ListViewContext data={{ ...data, title: data.translations.ru.title }} baseUrl="/forms/statuses" />
);

export default StatusesListContext;
