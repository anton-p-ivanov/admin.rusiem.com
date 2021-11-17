import React from 'react';

import MetaListContext from '../MetaCollectionContext';

import type { TMetaListRowProps } from './types';
import type { TDataMeta } from '@news/config/types';

const MetaListRow: React.FC<TMetaListRowProps> = (props) => {
  const { data, handlers } = props;
  const meta = data as TDataMeta;

  return (
    <>
      <td className="data-table__cell data-table__cell--property">
        <code>
          {`<meta ${meta.property}="${meta.name}" content="${meta.content}">`}
        </code>
      </td>
      <td className="data-table__cell data-table__cell--context">
        <MetaListContext data={meta} handlers={handlers} />
      </td>
    </>
  );
};

export default MetaListRow;
