import React, { useState } from 'react';

import classNames from 'classnames';
import { v4 } from 'uuid';

import Button from 'components/Button';

import type { TTabsProps } from './types';
import './styles.scss';

const Tabs: React.FC<TTabsProps> = (props) => {
  const { items, variant } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  const wrapperClassName = classNames('tabs', variant && `tabs--${variant}`);

  return (
    <div className={wrapperClassName}>
      <ul className="tabs__nav">
        {items.map((item, index) => {
          const className = classNames('tabs__item', index === activeTab && 'tabs__item--active');
          return (
            <li className={className} key={v4()}>
              <Button onClick={() => setActiveTab(index)}>{item.label}</Button>
            </li>
          );
        })}
      </ul>
      <div className="tabs__pane">
        {items[activeTab] && items[activeTab].component}
      </div>
    </div>
  );
};

export type { TTabsItem } from './types';
export default Tabs;
