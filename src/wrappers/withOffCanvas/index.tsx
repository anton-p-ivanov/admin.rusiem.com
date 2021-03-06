/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import OffCanvas from 'components/OffCanvas';
import useClickOutside from 'utils/useClickOutside';

import Context from './context';

function withOffCanvas<T>(
  Component: React.ComponentType<T>,
  CanvasComponent: React.ComponentType,
  title: string,
): React.FC<T> {
  const ComponentWithOffCanvas: React.FC<T> = (props: T) => {
    const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);
    const [isRendered, setIsRendered] = useState<boolean>(false);

    const toggleCanvas = (value?: boolean) => {
      setIsVisible(typeof value !== 'undefined' ? value : !isVisible);
      setIsRendered(true);
    };

    return (
      <Context.Provider value={{ toggle: toggleCanvas }}>
        <Component {...props} />
        <OffCanvas isVisible={isVisible} ref={ref} title={title}>
          {isRendered && <CanvasComponent />}
        </OffCanvas>
      </Context.Provider>
    );
  };

  ComponentWithOffCanvas.displayName = Component.displayName
    || Component.name
    || 'Component';

  return ComponentWithOffCanvas;
}

export default withOffCanvas;
