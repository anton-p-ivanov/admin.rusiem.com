import React, { useContext } from 'react';

import { DropDown, Icon } from 'components';
import { Context as ModalContext } from 'wrappers/withModal';

import Context from './context';

import type { TListViewContextProps } from './types';

const ListViewContext: React.FC<TListViewContextProps> = (props) => {
  const { data, baseUrl, children } = props;
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
    <Context.Provider value={{ remove: removeHandler }}>
      <DropDown toggle={toggleDropdown}>
        <Context.Consumer>
          {children || ((context) => (
            <>
              <DropDown.Link icon="edit" route={`${baseUrl}/${uuid}/edit`}>Изменить</DropDown.Link>
              <DropDown.Link icon="copy" route={`${baseUrl}/${uuid}/copy`}>Копировать</DropDown.Link>
              <DropDown.Divider />
              <DropDown.Button icon="trash-2" onClick={context.remove}>Удалить</DropDown.Button>
            </>
          ))}
        </Context.Consumer>
      </DropDown>
    </Context.Provider>
  );
};

export default ListViewContext;
