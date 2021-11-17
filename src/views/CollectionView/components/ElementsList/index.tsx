import React from 'react';

import { v4 } from 'uuid';

import DataTable from 'components/DataTable';
import DataToolbar from 'components/DataToolbar';

import type { TElementsListProps } from './types';

const ElementsList: React.FC<TElementsListProps> = (props) => {
  const { data = [], columns, templates } = props;
  const Row = templates.row;

  return (
    <>
      <DataTable columns={columns}>
        {!data.length && <DataTable.Empty span={columns.length} />}
        {data.map((item) => (
          <DataTable.Row key={v4()} template={<Row data={item} />} />
        ))}
      </DataTable>
      <DataToolbar component={templates.toolbar} />
    </>
  );
};

export default ElementsList;
