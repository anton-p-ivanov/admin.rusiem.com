import React from 'react';

import classNames from 'classnames';

import { Overlay } from 'components';

import type { TOffCanvasProps } from './types';
import './styles.scss';

const OffCanvas = React.forwardRef<HTMLDivElement, TOffCanvasProps>((props, ref) => {
  const { title, isVisible = true, children } = props;
  const className = classNames([
    'off-canvas',
    isVisible && 'off-canvas--visible',
  ]);

  return (
    <div className={className}>
      <div className="off-canvas__content" ref={ref}>
        <div className="off-canvas__header">
          {title}
        </div>
        <div className="off-canvas__body">
          {children}
        </div>
      </div>
      {isVisible && <Overlay />}
    </div>
  );
});

OffCanvas.displayName = 'OffCanvas';

export default OffCanvas;
