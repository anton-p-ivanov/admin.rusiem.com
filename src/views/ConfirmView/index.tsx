import React, { useContext, useEffect } from 'react';

import { Button, Form, Modal } from 'components';
import { Context } from 'wrappers/withConfirm';

import { useFields, useHandlers } from './hooks';

import type { TConfirmViewProps } from './types';

import './styles.scss';

const ConfirmView: React.FC<TConfirmViewProps> = (props) => {
  const { description, endpoint } = props;

  const { state, update } = useContext(Context);
  const handlers = useHandlers();
  const fields = useFields();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => update({ ...state, description, endpoint }), [endpoint]);

  const isDisabled = !state.password || state.password.length === 0;

  return (
    <Modal title="Требуется подтверждение" size="small">
      <div className="confirm-view">
        <div className="confirm-view__description">{description}</div>
        <div className="confirm-view__form">
          <Form.Field field={fields.password} />
          <Form.Actions>
            <Button onClick={handlers.confirm} isDisabled={isDisabled} variant="danger">
              Подтвердить
            </Button>
            <Button onClick={handlers.dismiss}>
              Отменить
            </Button>
          </Form.Actions>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmView;
