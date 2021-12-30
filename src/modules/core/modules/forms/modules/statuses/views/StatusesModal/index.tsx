import React, { useEffect, useState } from 'react';

import { TDataForm, TDataFormStatus } from '@forms/config/types';
import { Button, Form, Modal } from 'components';
import { useStore } from 'views/FormView/store';

import defaults from './defaults';
import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';

import type { TStatusesModal } from './types';

const StatusesModal: React.FC<TStatusesModal> = ({ uuid }) => {
  const [state, setState] = useState<TDataFormStatus>(defaults);

  const store = useStore();
  const { statuses } = store.state.data as TDataForm;

  const fields = useFields(state, setState);
  const handlers = useHandlers(state);

  useEffect(() => {
    const index = statuses.findIndex((item) => item.uuid === uuid);
    if (index > -1) {
      setState({ ...state, ...statuses[index] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid]);

  return (
    <Modal title="Статус веб-формы">
      <Form.Field field={fields.isDefault} />
      <Form.Field field={fields.name} />
      <div className="grid-view__columns">
        <Form.Field field={fields.type} />
        <Form.Field field={fields.template} />
      </div>
      <Form.Actions>
        <Button onClick={handlers.submit} variant="primary">
          Подтвердить
        </Button>
        <Button onClick={handlers.dismiss}>
          Отменить
        </Button>
      </Form.Actions>
    </Modal>
  );
};

export default StatusesModal;
