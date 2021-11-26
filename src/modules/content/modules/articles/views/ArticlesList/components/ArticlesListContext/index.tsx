import React, { useContext } from 'react';

import { DropDown, Icon } from 'components';
import { Context as ModalContext } from 'wrappers/withModal';

import type { TArticlesListContextProps } from './types';

const ArticlesListContext: React.FC<TArticlesListContextProps> = ({ data }) => {
  const { toggle: toggleConfirm } = useContext(ModalContext);
  const toggleDropdown = <Icon name="more-vertical" title="Выберите действие" />;

  const removeHandler = () => {
    const description = `Вы собираетесь удалить публикацию "${data.title}".`;
    const endpoint = `/content/articles/${data.uuid}`;

    return (
      toggleConfirm && toggleConfirm(true, { description, endpoint })
    );
  };

  return (
    <DropDown toggle={toggleDropdown}>
      <DropDown.Link icon="edit" route={`/content/articles/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link icon="copy" route={`/content/articles/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button icon="trash-2" onClick={removeHandler}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default ArticlesListContext;
