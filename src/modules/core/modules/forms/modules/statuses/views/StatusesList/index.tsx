import React from 'react';

import { v4 } from 'uuid';

import { Button, DataTable } from 'components/index';
import ConfirmView from 'views/ConfirmView';
import withConfirm from 'wrappers/withConfirm';
import withModal, { Context as ModalContext } from 'wrappers/withModal';

import Context from './context';
import settings from './settings';

import type { TStatusesList } from './types';

import './styles.scss';

const StatusesList: React.FC<TStatusesList> = (props) => {
  const { data, toggleModal } = props;
  const { columns, templates } = settings;
  const createHandler = () => toggleModal && toggleModal(true, { uuid: undefined });

  return (
    <ModalContext.Consumer>
      {(context) => (
        <Context.Provider value={{ toggleModal, toggleConfirm: context.toggle }}>
          <DataTable columns={columns}>
            {data.length === 0 && <DataTable.Empty span={columns.length} />}
            {data.map((item) => (
              <DataTable.Row key={v4()} template={<templates.row data={item} />} />
            ))}
          </DataTable>
          <div>
            <Button size="small" onClick={createHandler}>Добавить</Button>
          </div>
        </Context.Provider>
      )}
    </ModalContext.Consumer>
  );
};

export default withModal(StatusesList, withConfirm(ConfirmView));
