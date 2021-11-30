import React, { useEffect } from 'react';

import classNames from 'classnames';

import { Form } from 'components';

import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';
import withStore, { useStore } from './store';

import type { TFormViewProps } from './types';

const FormView: React.FC<TFormViewProps> = (props) => {
  const { variant, endpoints, children } = props;

  const store = useStore();
  const handlers = useHandlers(props);

  useEffect(() => {
    if (endpoints && endpoints.request) {
      store.request(endpoints.request);
    }

    return () => store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const className = classNames('form-view', variant && `form-view--${variant}`);

  return (
    <div className={className}>
      <Form onSubmit={handlers.submit}>
        {children}
      </Form>
    </div>
  );
};

export { withStore, useFields };
export default FormView;