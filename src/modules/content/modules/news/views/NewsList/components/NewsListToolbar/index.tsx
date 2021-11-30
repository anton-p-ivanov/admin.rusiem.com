import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, DataToolbar, Icon } from 'components';
import Context from 'wrappers/withOffCanvas/context';

const NewsListToolbar: React.FC = ({ children }) => {
  const { toggle } = useContext(Context);

  const toggleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return toggle && toggle();
  };

  return (
    <DataToolbar>
      <DataToolbar.Group>
        <DataToolbar.Item>
          <Link to="/content/news/create" className="btn btn--success">Добавить новость</Link>
        </DataToolbar.Item>
      </DataToolbar.Group>
      <DataToolbar.Group>
        <DataToolbar.Item>
          {children}
        </DataToolbar.Item>
        <DataToolbar.Item>
          <Button onClick={toggleFilter}>
            <Icon name="filter" title="Параметры фильтрации" />
          </Button>
        </DataToolbar.Item>
      </DataToolbar.Group>
    </DataToolbar>
  );
};

export default NewsListToolbar;
