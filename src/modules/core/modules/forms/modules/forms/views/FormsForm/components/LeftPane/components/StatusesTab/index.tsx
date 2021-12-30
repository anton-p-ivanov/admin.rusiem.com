import React from 'react';

import StatusesList from '@forms/modules/statuses/views/StatusesList';
import StatusesModal from '@forms/modules/statuses/views/StatusesModal';
import { useStore } from 'views/FormView/store';
import withModal, { Context as ModalContext } from 'wrappers/withModal';

import type { TStatusesTab } from './types';
import type { TDataForm } from '@forms/config/types';

const StatusesTab: React.FC<TStatusesTab> = () => {
  const { state } = useStore();
  const data = state.data as TDataForm;

  return (
    <ModalContext.Consumer>
      {(context) => <StatusesList data={data.statuses} toggleModal={context.toggle} />}
    </ModalContext.Consumer>
  );
};

export default withModal(StatusesTab, StatusesModal);
