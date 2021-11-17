import React from 'react';

import { DropDown, Icon } from 'components';

import { TMetaListContextProps } from './types';

const MetaListContext: React.FC<TMetaListContextProps> = ({ data, handlers }) => {
  const toggle = <Icon name="more-vertical" title="Выберите действие" />;

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlers.delete(data.uuid);
  };

  const updateHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlers.update(data.uuid);
  };

  const copyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlers.copy(data.uuid);
  };

  return (
    <DropDown toggle={toggle}>
      <DropDown.Button icon="edit" onClick={updateHandler}>Изменить</DropDown.Button>
      <DropDown.Button icon="copy" onClick={copyHandler}>Копировать</DropDown.Button>
      <DropDown.Divider />
      <DropDown.Button icon="trash-2" onClick={deleteHandler}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default MetaListContext;
