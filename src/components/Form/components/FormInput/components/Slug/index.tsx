import React, { useState } from 'react';

import slugify from 'slugify';

import Button from 'components/Button';

import Text from '../Text';

import type { TSlugProps } from './types';
import './styles.scss';

const Slug = React.forwardRef<HTMLInputElement, TSlugProps>(({ field }, ref) => {
  const [slug, setSlug] = useState<string>('');
  const { attrs } = field;

  const onClick = () => {
    setSlug(slugify(attrs.value, {
      replacement: '-',
      remove: /\./,
      lower: true,
    }));
  };

  const onChange = (value: string) => {
    setSlug(value);
    if (typeof field.onChange === 'function') {
      field.onChange(value);
    }
  };

  return (
    <div className="form-input form-input__slug">
      <Text field={{ ...field, value: slug || field.value, onChange }} ref={ref} />
      <Button onClick={onClick}>Slug</Button>
    </div>
  );
});

Slug.displayName = 'Slug';

export default Slug;
