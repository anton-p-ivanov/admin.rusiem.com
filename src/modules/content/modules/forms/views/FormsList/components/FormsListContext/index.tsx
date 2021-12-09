import React from 'react';

import { ListViewContext } from 'views/ListView/components';

import type { TFormsListContextProps } from './types';

const FormsListContext: React.FC<TFormsListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/content/forms" />
);

export default FormsListContext;
