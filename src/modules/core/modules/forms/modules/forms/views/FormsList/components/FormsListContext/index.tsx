import React from 'react';

import { DropDown } from 'components/index';
import { ListViewContext } from 'views/ListView/components';

import type { TFormsListContextProps } from './types';

const FormsListContext: React.FC<TFormsListContextProps> = ({ data }) => (
  <ListViewContext data={data} baseUrl="/forms">
    {(context) => {
      const uuid = data.uuid as string;
      return (
        <>
          <DropDown.Link icon="edit" route={`/forms/${uuid}/edit`}>Изменить</DropDown.Link>
          <DropDown.Link icon="copy" route={`/forms/${uuid}/copy`}>Копировать</DropDown.Link>
          <DropDown.Divider />
          <DropDown.Link icon="layers" route={`/forms/${uuid}/statuses`}>Статусы</DropDown.Link>
          <DropDown.Divider />
          <DropDown.Button icon="trash-2" onClick={context.remove}>Удалить</DropDown.Button>
        </>
      );
    }}
  </ListViewContext>
);

export default FormsListContext;
