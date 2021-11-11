import React from 'react';

export type TDropDownLinkProps = {
  route: string;
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
