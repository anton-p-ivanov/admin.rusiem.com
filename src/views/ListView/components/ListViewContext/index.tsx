import React, { useContext } from 'react';

import { DropDown, Icon } from 'components';
import { Context as ModalContext } from 'wrappers/withModal';

import type { TListViewContextProps } from './types';

const ListViewContext: React.FC<TListViewContextProps> = (props) => {
  const { data, baseUrl } = props;
  const { uuid = 'unknown', title } = data;
  const { toggle } = useContext(ModalContext);
  const toggleDropdown = <Icon name="more-vertical" title="Выберите действие" />;

  const removeHandler = () => (
    toggle && toggle(true, {
      description: `Вы собираетесь удалить элемент "${title}".`,
      endpoint: `${baseUrl}/${uuid}`,
    })
  );

  return (
    <DropDown toggle={toggleDropdown}>
      <DropDown.Link icon="edit" route={`${baseUrl}/${uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link icon="copy" route={`${baseUrl}/${uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button icon="trash-2" onClick={removeHandler}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default ListViewContext;
