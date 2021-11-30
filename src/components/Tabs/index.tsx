import React, { useState } from 'react';

import classNames from 'classnames';
import { v4 } from 'uuid';

import Button from 'components/Button';

import type { TTabsProps } from './types';
import './styles.scss';

const Tabs: React.FC<TTabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const Tab = items[activeTab].component;

  return (
    <div className="tabs">
      <ul className="tabs__nav">
        {items.map((item, index) => {
          const className = classNames(
            'tabs__item',
            index === activeTab && 'tabs__item--active',
          );

          return (
            <li className={className} key={v4()}>
              <Button onClick={() => setActiveTab(index)}>{item.label}</Button>
            </li>
          );
        })}
      </ul>
      <div className="tabs__pane">
        <Tab />
      </div>
    </div>
  );
};

export type { TTabsItem } from './types';
export default Tabs;
