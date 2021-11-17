import React from 'react';

export type TModalProps = {
  title: string;
  isVisible?: boolean;
  name?: string;
  size?: 'small' | 'large';
  children?: React.ReactNode;
};
