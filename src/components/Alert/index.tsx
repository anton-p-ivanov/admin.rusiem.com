import React, { useEffect, useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import type { TAlertProps } from './types';
import './styles.scss';

const Alert: React.FC<TAlertProps> = ({ children, ...props }) => {
  const [state, setState] = useState<boolean>(false);
  const { isVisible = false, isDismissible = true, variant = 'info' } = props;

  const headers = {
    info: 'Знаете ли Вы?',
    warning: 'Ой, что-то пошло не так',
    danger: 'Ну всё! Приехали!',
    success: 'Всё идёт по плану!',
  };

  const onClick = () => {
    setState(false);
  };

  useEffect(() => setState(isVisible), [isVisible]);

  if (!state) {
    return null;
  }

  return (
    <div className={`alert alert--${variant}`}>
      <div className={`alert__icon alert__icon--${variant}`}>
        <Icon name="alert-circle" />
      </div>
      <div className="alert__content">
        <div className="alert__header">{headers[variant]}</div>
        <div className="alert__message">{children}</div>
      </div>
      <div className="alert__close">
        {isDismissible && (
          <Button variant="link" size="small" onClick={onClick}>
            <Icon name="x" title="Закрыть" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Alert;
