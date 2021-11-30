import React, { useContext } from 'react';

import { DropDown, Icon } from 'components';
import { Context as ModalContext } from 'wrappers/withModal';

import type { TNewsListContextProps } from './types';

const NewsListContext: React.FC<TNewsListContextProps> = ({ data }) => {
  const { toggle: toggleConfirm } = useContext(ModalContext);
  const toggleDropdown = <Icon name="more-vertical" title="Выберите действие" />;
  const { uuid = 'unknown' } = data;

  const removeHandler = () => {
    const description = `Вы собираетесь удалить новость "${data.title}".`;
    const endpoint = `/content/news/${uuid}`;

    return (
      toggleConfirm && toggleConfirm(true, { description, endpoint })
    );
  };

  return (
    <DropDown toggle={toggleDropdown}>
      <DropDown.Link icon="edit" route={`/content/news/${uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link icon="copy" route={`/content/news/${uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button icon="trash-2" onClick={removeHandler}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default NewsListContext;
