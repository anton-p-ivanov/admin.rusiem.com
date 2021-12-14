import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, DataToolbar, Icon } from 'components';
import Context from 'wrappers/withOffCanvas/context';

import { useStore } from '../../store';

import type { TListViewToolbarProps } from './types';

const ListViewToolbar: React.FC<TListViewToolbarProps> = (props) => {
  const { toggle } = useContext(Context);
  const { refresh } = useStore();

  const {
    createUrl,
    createLabel = 'Добавить',
    withFilter = true,
    children,
  } = props;

  const toggleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return toggle && toggle();
  };

  const refreshHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    refresh();
  };

  return (
    <DataToolbar>
      <DataToolbar.Group>
        {createUrl && (
          <DataToolbar.Item>
            <Link to={createUrl} className="btn btn--success">{createLabel}</Link>
          </DataToolbar.Item>
        )}
        <DataToolbar.Item>
          <Button onClick={refreshHandler}>
            <Icon name="refresh-cw" title="Обновить" />
          </Button>
        </DataToolbar.Item>
      </DataToolbar.Group>
      <DataToolbar.Group>
        <DataToolbar.Item>
          {children}
        </DataToolbar.Item>
        {withFilter && (
          <DataToolbar.Item>
            <Button onClick={toggleFilter}>
              <Icon name="filter" title="Параметры фильтрации" />
            </Button>
          </DataToolbar.Item>
        )}
      </DataToolbar.Group>
    </DataToolbar>
  );
};

export default ListViewToolbar;
