import React from 'react';

type TModalContext = {
  toggle?: (value?: boolean) => void;
};

export default React.createContext<TModalContext>({});
