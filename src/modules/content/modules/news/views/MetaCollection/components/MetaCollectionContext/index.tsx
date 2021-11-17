import React from 'react';

import { DropDown, Icon } from 'components';

import { TMetaListContextProps } from './types';

const MetaListContext: React.FC<TMetaListContextProps> = ({ data }) => {
  const toggle = <Icon name="more-vertical" title="Выберите действие" />;

  const removeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <DropDown toggle={toggle}>
      <DropDown.Link icon="edit" route={`/content/meta/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link icon="copy" route={`/content/meta/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Link
        icon="trash-2"
        route={`/content/meta/${data.uuid}/remove`}
        onClick={removeHandler}
      >
        Удалить
      </DropDown.Link>
    </DropDown>
  );
};

export default MetaListContext;
