import React from 'react';

import type { TLoadingProps } from './types';
import './styles.scss';

const Loading: React.FC<TLoadingProps> = (props) => {
  const { text = 'Подождите, идёт загрузка ...' } = props;

  return (
    <div className="loading">
      <div className="loading__animation">
        <div />
        <div />
        <div />
      </div>
      <div className="loading__text">{text}</div>
    </div>
  );
};

export default Loading;
