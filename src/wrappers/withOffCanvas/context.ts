import React from 'react';

type TOffCanvasContext = {
  toggle?: (value?: boolean) => void;
};

export default React.createContext<TOffCanvasContext>({});
