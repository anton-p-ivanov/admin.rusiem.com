import React, { useEffect } from 'react';

import classNames from 'classnames';

import { Form } from 'components';

import Context from './context';
import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';
import withStore, { useStore } from './store';

import type { TFormViewProps } from './types';

const FormView: React.FC<TFormViewProps> = (props) => {
  const {
    fields, defaults = {}, variant, endpoints, children,
  } = props;

  const store = useStore();
  const handlers = useHandlers(props);

  useEffect(() => {
    store.update({ ...store.state, data: defaults });

    if (endpoints && endpoints.request) {
      store.request(endpoints.request);
    }

    return () => store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const className = classNames('form-view', variant && `form-view--${variant}`);

  return (
    <Context.Provider value={{ fields: useFields(fields || {}) }}>
      <div className={className}>
        <Form onSubmit={handlers.submit}>
          {children}
        </Form>
      </div>
    </Context.Provider>
  );
};

export { withStore, useFields, Context };
export default FormView;
