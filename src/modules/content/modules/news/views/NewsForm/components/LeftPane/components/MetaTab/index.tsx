import React, { useEffect, useState } from 'react';

import { TDataMeta } from '@news/config/types';
import { Form } from 'components';
import { useStore } from 'views/FormView/store';

import fields from './fields';

import type { TFormField } from 'components/Form/types';

type TMetaTabState = {
  [key: string]: string;
};

const MetaTab: React.FC = () => {
  const { state, update } = useStore();
  const [meta, setMeta] = useState<TMetaTabState>(
    Object.fromEntries((state.data.meta as TDataMeta[]).map((o) => [o.name, o.content])),
  );

  Object.keys(fields).forEach((key) => {
    const field = fields[key] as TFormField<string>;
    const value = meta[field.name];
    const extend = {
      value: typeof value === 'undefined' ? '' : value,
      onChange: (v: typeof value) => {
        setMeta({ ...meta, [field.name]: v });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  useEffect(() => {
    const objects = Object.keys(meta).map((key) => ({
      property: 'name',
      name: key,
      content: meta[key],
    }));

    update({ ...state, data: { ...state.data, meta: objects } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta]);

  return (
    <>
      <Form.Field field={fields.title} />
      <Form.Field field={fields.keywords} />
      <Form.Field field={fields.description} />
    </>
  );
};

export default MetaTab;
