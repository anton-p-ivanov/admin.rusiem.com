import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';

import { Alert, Form } from 'components';

import Context from './context';
import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';
import withStore, { useStore } from './store';

import type { TFormViewProps } from './types';

const FormView: React.FC<TFormViewProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
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

  const isValidationFailed = store.state.status === 'VALIDATION_FAILED';
  const isSubmitFailed = store.state.status === 'SUBMIT_FAILED';
  const isSubmitSucceed = store.state.status === 'SUBMIT_SUCCEED';

  useEffect(() => {
    if ((isSubmitFailed || isSubmitSucceed || isValidationFailed) && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isSubmitSucceed, isSubmitFailed, isValidationFailed]);

  return (
    <Context.Provider value={{ fields: useFields(fields || {}) }}>
      <div ref={ref}>
        <Alert variant="danger" isVisible={isSubmitFailed}>Ошибка сохранения изменений. Пожалуйста, попробуйте позже.</Alert>
        <Alert variant="warning" isVisible={isValidationFailed}>Вероятно, некоторые поля формы заполнены неверно</Alert>
        <Alert variant="success" isVisible={isSubmitSucceed}>Изменения успешно сохранены</Alert>
      </div>
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
