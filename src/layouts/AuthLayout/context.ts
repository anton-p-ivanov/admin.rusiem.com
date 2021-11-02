import React from 'react';

export type TAuthLayoutContext = {
  setToken: (token: string) => void;
};

const Context = React.createContext<TAuthLayoutContext>({
  setToken: () => false,
});

export default Context;
