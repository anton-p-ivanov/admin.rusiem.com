import React from 'react';

import Form from 'components/Form';

import { useStore } from '../../store';
import fields from './fields';

import type { TListViewSortProps } from './types';
import type { TFormField } from 'components/Form/types';

import './styles.scss';

const ListViewSort: React.FC<TListViewSortProps> = ({ columns }) => {
  const { state, update } = useStore();

  Object.keys(fields).forEach((key) => {
    const field = fields[key] as TFormField<string>;
    const extend = {
      value: state.sort[key],
      onChange: (v: string) => {
        update({
          ...state,
          sort: { ...state.sort, [key]: v },
          timestamp: new Date().getTime(),
        });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  fields.sortBy.attrs = {
    options: columns
      .filter((column) => column.title)
      .map((column) => ({ value: column.name, label: column.title })),
  };

  return (
    <div className="list-view__sort">
      <Form variant="sort">
        <Form.Field field={fields.sortBy} />
        <Form.Field field={fields.sortOrder} />
      </Form>
    </div>
  );
};

export default ListViewSort;
