import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TTemplatesListContextProps } from './types';

const TemplatesListContext: React.FC<TTemplatesListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/mail/templates" />
);

export default TemplatesListContext;
