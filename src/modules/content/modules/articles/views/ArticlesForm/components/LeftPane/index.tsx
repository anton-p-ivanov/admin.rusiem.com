import React from 'react';

import { Tabs } from 'components';

import Context from './context';
import tabs from './tabs';

import type { TLeftPaneProps } from './types';

const LeftPane: React.FC<TLeftPaneProps> = ({ fields }) => (
  <Context.Provider value={{ fields }}>
    <div className="grid-view__left-pane">
      <Tabs items={tabs} />
    </div>
  </Context.Provider>
);

export default LeftPane;
