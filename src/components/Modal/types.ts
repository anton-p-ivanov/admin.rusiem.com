import React from 'react';

export type TModalProps = {
  title: string;
  name?: string;
  size?: 'small' | 'large';
  children?: React.ReactNode;
};
