import React from 'react';

import { DropDown } from 'components';
import { ListViewContext } from 'views/ListView/components';

import type { TResponsesListContextProps } from './types';

const ResponsesListContext: React.FC<TResponsesListContextProps> = ({ data }) => {
  const baseUrl = '/content/vacancies/responses';
  const uuid = data.uuid || 'unknown';

  return (
    <ListViewContext data={data} baseUrl={baseUrl}>
      {(context) => (
        <>
          <DropDown.Link icon="eye" route={`${baseUrl}/${uuid}/view`}>Просмотреть</DropDown.Link>
          <DropDown.Divider />
          <DropDown.Button icon="trash-2" onClick={context.remove}>Удалить</DropDown.Button>
        </>
      )}
    </ListViewContext>
  );
};

export default ResponsesListContext;
