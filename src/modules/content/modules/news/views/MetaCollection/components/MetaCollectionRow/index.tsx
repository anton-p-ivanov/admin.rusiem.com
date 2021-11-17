import React from 'react';

import MetaListContext from '../MetaCollectionContext';

import type { TMetaListRowProps } from './types';

const MetaListRow: React.FC<TMetaListRowProps> = (props) => {
  const { data } = props;

  return (
    <>
      <td className="data-table__cell data-table__cell--property">
        <code>
          {`<meta ${data.property}="${data.name}" content="${data.content}">`}
        </code>
      </td>
      <td className="data-table__cell data-table__cell--context">
        <MetaListContext data={data} />
      </td>
    </>
  );
};

export default MetaListRow;
