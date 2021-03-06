import React from 'react';

import classNames from 'classnames';

import { DataToolbarGroup, DataToolbarItem } from './components';

import type { TDataToolbar } from './types';
import './styles.scss';

const DataToolbar: TDataToolbar = (props) => {
  const { variant = 'default', component: Toolbar, children } = props;

  const className = classNames([
    'data-toolbar',
    variant && `data-toolbar--${variant}`,
  ]);

  return (
    <div className={className}>
      {Toolbar ? <Toolbar /> : children}
    </div>
  );
};

DataToolbar.Group = DataToolbarGroup;
DataToolbar.Item = DataToolbarItem;

export default DataToolbar;
