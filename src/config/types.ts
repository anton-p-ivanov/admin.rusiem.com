import React from 'react';

export type TNavItem = {
  title: string;
  icon?: string;
  route?: string;
  items?: TNavItem[];
};

export type TRoute = {
  path: string;
  title: string;
  component: React.FC;
};

export type TDataWorkflow = {
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};

export type TDataEntity = {
  uuid?: string;
  title: string;
  workflow?: TDataWorkflow;
};
