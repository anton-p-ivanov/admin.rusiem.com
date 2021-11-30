import React from 'react';

import * as Child from './components';

export type TDropDownProps = {
  toggle: React.ReactNode;
  variant?: 'left' | 'right';
};

export type TDropDown = React.FC<TDropDownProps> & {
  Link: typeof Child.DropDownLink;
  Divider: typeof Child.DropDownDivider;
  Button: typeof Child.DropDownButton;
};
