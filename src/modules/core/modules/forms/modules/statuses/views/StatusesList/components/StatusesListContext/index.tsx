import React from 'react';

import { DropDown } from 'components/index';
import { ListViewContext } from 'views/ListView/components';

import useHandlers from '../../hooks/useHandlers';

import type { TStatusesListContextProps } from './types';

const StatusesListContext: React.FC<TStatusesListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <ListViewContext data={{ ...data, title: data.translations.ru.title }} baseUrl="/forms/statuses">
      {() => (
        <>
          <DropDown.Button icon="edit" onClick={handlers.update}>Изменить</DropDown.Button>
          <DropDown.Button icon="copy" onClick={handlers.update}>Копировать</DropDown.Button>
          <DropDown.Divider />
          <DropDown.Button icon="trash-2" onClick={handlers.delete}>Удалить</DropDown.Button>
        </>
      )}
    </ListViewContext>
  );
};

export default StatusesListContext;
