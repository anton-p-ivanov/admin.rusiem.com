import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import { TDropDownLinkProps } from './types';

const DropDownLink: React.FC<TDropDownLinkProps> = (props) => {
  const {
    route,
    icon,
    onClick,
    children,
  } = props;

  return (
    <Link to={route} className="dropdown__item dropdown__item--link" onClick={onClick}>
      <div className="dropdown__icon">
        <Icon name={icon} />
      </div>
      <div className="dropdown__label">{children}</div>
    </Link>
  );
};

export default DropDownLink;
