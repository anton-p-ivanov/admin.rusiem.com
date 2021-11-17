import React, { useContext } from 'react';

import { Button, DataToolbar } from 'components';
import { ViewContext } from 'views/CollectionView/context';

const MetaListToolbar: React.FC = () => {
  const { toggleModal } = useContext(ViewContext);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (typeof toggleModal === 'function') {
      toggleModal(true);
    }
  };

  return (
    <DataToolbar>
      <DataToolbar.Group>
        <DataToolbar.Item>
          <Button size="small" onClick={onButtonClick}>Добавить</Button>
        </DataToolbar.Item>
      </DataToolbar.Group>
    </DataToolbar>
  );
};

export default MetaListToolbar;
