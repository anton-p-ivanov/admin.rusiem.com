import React from 'react';

import CollectionView from 'views/CollectionView';

import type { TCollectionProps } from './types';

const Collection: React.FC<TCollectionProps> = ({ field }) => {
  const { name, attrs } = field;

  return (
    <CollectionView property={name} settings={attrs} />
  );
};

export default Collection;
