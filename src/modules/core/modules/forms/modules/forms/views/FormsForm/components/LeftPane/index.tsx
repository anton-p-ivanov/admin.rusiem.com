import React from 'react';

import { Tabs } from 'components/index';

import Context from './context';
import tabs from './tabs';

import type { TLeftPaneProps } from './types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => (
  <div className="grid-view__left-pane">
    <Context.Provider value={{ fields }}>
      <Tabs items={tabs} />
    </Context.Provider>
  </div>
);

export default LeftPane;
