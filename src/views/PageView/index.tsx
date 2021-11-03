import React from 'react';

import { TPageViewProps } from './types';

import './styles.scss';

const PageView: React.FC<TPageViewProps> = (props) => {
  const { title, children } = props;

  return (
    <div className="page-view">
      <div className="page-view__header">
        {title}
      </div>
      <div className="page-view__body">
        <div className="page-view__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageView;
