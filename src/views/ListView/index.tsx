import React, { useEffect } from 'react';

import { v4 } from 'uuid';

import { Alert, DataTable, Pagination } from 'components';
import ConfirmView from 'views/ConfirmView';
import withConfirm from 'wrappers/withConfirm';
import withModal from 'wrappers/withModal';

import ListViewSort from './components/ListViewSort';
import withStore, { useStore } from './store';

import type { TListViewProps, TListViewRow, TListViewSort } from './types';

const defaultSort: TListViewSort = {
  sortBy: 'updatedAt',
  sortOrder: 'DESC',
};

const ListView: React.FC<TListViewProps> = (props) => {
  const {
    endpoint, columns, templates, sort = defaultSort,
  } = props;
  const { state, update, request } = useStore();
  const { pagination } = state;

  const params = {
    endpoint,
    page: pagination.page,
    size: pagination.size,
    sort: state.sort,
  };

  const deps = JSON.stringify(params);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => update({ ...state, sort }), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => state.sort && request(params), [deps, state.timestamp]);

  // Callback used in pagination to navigate through pages
  const navigate = (page: number) => {
    update({ ...state, pagination: { ...pagination, page } });
  };

  const Toolbar: React.FC | undefined = templates.toolbar;
  const Row: React.FC<TListViewRow> = templates.row;

  return (
    <>
      {Toolbar && (
        <Toolbar>
          <ListViewSort columns={columns} />
        </Toolbar>
      )}
      {state.isFiltered && <Alert variant="warning">Показаны все элементы с учётом параметров фильтрации</Alert>}
      <DataTable columns={columns}>
        {state.status === 'FETCHING'
          ? <DataTable.Loading span={columns.length} />
          : (
            <>
              {state.data.length === 0 && <DataTable.Empty span={columns.length} />}
              {state.data.map((item) => (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <DataTable.Row key={v4()} template={<Row data={item} />} />
              ))}
            </>
          )}
      </DataTable>
      <Pagination
        resultsTotal={pagination.total}
        resultsPerPage={pagination.size}
        page={pagination.page}
        navigate={navigate}
      />
    </>
  );
};

export { withStore };

export default withModal(ListView, withConfirm(ConfirmView));
