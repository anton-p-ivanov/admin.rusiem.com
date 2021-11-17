import React from 'react';

type TCollectionViewContext = {
  property: string;
  toggleModal?: (value?: boolean) => void;
};

export default React.createContext<TCollectionViewContext>({
  property: 'none',
});
