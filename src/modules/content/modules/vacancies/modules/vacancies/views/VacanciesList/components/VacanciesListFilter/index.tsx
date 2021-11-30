import React, { useEffect } from 'react';

import { Button, Form } from 'components';
import FormView, { withStore } from 'views/FormView';

import useFields from './hooks/useFields';
import useHandlers from './hooks/useHandlers';

import './styles.scss';

const VacanciesListFilter: React.FC = () => {
  const handlers = useHandlers();
  const fields = useFields();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handlers.fetch(), []);

  return (
    <FormView variant="vacancies-list-filter">
      <div className="form__fields">
        <Form.Field field={fields.title} />
        <Form.Field field={fields.publishedAt} />
        <Form.Field field={fields.site} />
        <Form.Field field={fields.locale} />
        <Form.Field field={fields.isPublished} />
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
  );
};

export default withStore(VacanciesListFilter);
