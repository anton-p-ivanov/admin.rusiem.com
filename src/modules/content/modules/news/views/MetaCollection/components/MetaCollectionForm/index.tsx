import React from 'react';

import { Button, Form } from 'components/index';

import type { TElementsForm } from 'views/CollectionView/types';

const MetaForm: React.FC<TElementsForm> = ({ handlers, fields }) => (
  <>
    <div className="grid-view">
      <Form.Field field={fields.name} />
      <Form.Field field={fields.property} />
    </div>
    <Form.Field field={fields.content} />
    <Form.Actions>
      <Button onClick={handlers.submit} variant="primary">
        Сохранить
      </Button>
      <Button onClick={handlers.close}>
        Закрыть
      </Button>
    </Form.Actions>
  </>
);

export default MetaForm;
