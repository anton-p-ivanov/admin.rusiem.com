import type { TDataMeta } from '@news/config/types';
import type { TElementsListContext } from 'views/CollectionView/types';

export type TMetaListContextProps = TElementsListContext & {
  data: TDataMeta;
};
