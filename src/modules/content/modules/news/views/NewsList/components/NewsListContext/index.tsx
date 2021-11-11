import React from 'react';

import { DropDown, Icon } from 'components';

import { TNewsListContextProps } from './types';

const NewsListContext: React.FC<TNewsListContextProps> = ({ data }) => {
  const toggle = <Icon name="more-vertical" title="Выберите действие" />;

  const removeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <DropDown toggle={toggle}>
      <DropDown.Link icon="edit" route={`/content/news/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link icon="copy" route={`/content/news/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Link
        icon="trash-2"
        route={`/content/news/${data.uuid}/remove`}
        onClick={removeHandler}
      >
        Удалить
      </DropDown.Link>
    </DropDown>
  );
};

export default NewsListContext;
