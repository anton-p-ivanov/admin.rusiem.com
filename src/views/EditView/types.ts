import React from 'react';

import type { TFormViewContext, TFormViewProps } from 'views/FormView/types';

export type TEditViewProps = TFormViewProps & {
  children: (value: TFormViewContext) => React.ReactNode;
};
