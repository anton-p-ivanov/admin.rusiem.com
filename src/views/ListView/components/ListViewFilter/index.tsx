import React, { useEffect } from 'react';

import { Button, Form } from 'components';
import FormView, { Context, withStore } from 'views/FormView';

import useHandlers from './hooks/useHandlers';

import type { TListViewFilterProps } from './types';

import './styles.scss';

const ListViewFilter: React.FC<TListViewFilterProps> = (props) => {
  const { param, fields, children } = props;

  const handlers = useHandlers(param);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handlers.fetch(), []);

  return (
    <div className="list-view__filter">
      <FormView fields={fields}>
        <div className="form__fields">
          <Context.Consumer>
            {children || ((context) => (
              <>
                <Form.Field field={context.fields.title} />
                <Form.Field field={context.fields.publishedAt} />
                <Form.Field field={context.fields.site} />
                <Form.Field field={context.fields.locale} />
                <Form.Field field={context.fields.isPublished} />
              </>
            ))}
          </Context.Consumer>
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
