import React, { useEffect } from 'react';

import { Button, Form } from 'components';
import FormView, { withStore } from 'views/FormView';

import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';

import type { TListViewFilterProps } from './types';
import type { TFormFields } from 'components/Form/types';

import './styles.scss';

const defaultRenderFields = (f: TFormFields) => (
  <>
    <Form.Field field={f.title} />
    <Form.Field field={f.publishedAt} />
    <Form.Field field={f.site} />
    <Form.Field field={f.locale} />
    <Form.Field field={f.isPublished} />
  </>
);

const ListViewFilter: React.FC<TListViewFilterProps> = (props) => {
  const { param, fields, renderFields = defaultRenderFields } = props;

  const handlers = useHandlers(param);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handlers.fetch(), []);

  return (
    <div className="list-view__filter">
      <FormView>
        <div className="form__fields">
          {renderFields(useFields(fields))}
        </div>
        <Form.Actions>
          <Button onClick={handlers.apply} variant="primary">
            Применить
          </Button>
          <Button onClick={handlers.reset}>
            Сбросить
          </Button>
        </Form.Actions>
      </FormView>
    </div>
  );
};

export default withStore(ListViewFilter);
