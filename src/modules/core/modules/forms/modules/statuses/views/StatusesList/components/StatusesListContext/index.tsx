import React from 'react';
import { useParams } from 'react-router-dom';

import { DropDown } from 'components/index';
import { ListViewContext } from 'views/ListView/components';

import type { TStatusesListContextProps } from './types';

const StatusesListContext: React.FC<TStatusesListContextProps> = ({ data }) => {
  const { form = 'unknown' } = useParams();

  return (
    <ListViewContext data={{ ...data, title: data.translations.ru.title }} baseUrl="/forms/statuses">
      {(context) => {
        const uuid = data.uuid || 'unknown';
        return (
          <>
            <DropDown.Link icon="edit" route={`/forms/${form}/statuses/${uuid}/edit`}>Изменить</DropDown.Link>
            <DropDown.Link icon="copy" route={`/forms/${form}/statuses/${uuid}/copy`}>Копировать</DropDown.Link>
            <DropDown.Divider />
            <DropDown.Button icon="trash-2" onClick={context.remove}>Удалить</DropDown.Button>
          </>
        );
      }}
    </ListViewContext>
  );
};

export default StatusesListContext;
