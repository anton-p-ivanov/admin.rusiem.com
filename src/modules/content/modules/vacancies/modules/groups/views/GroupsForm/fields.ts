import sharedFields from 'config/fields';

import type { TFormFields } from 'components/Form/types';

const fields: TFormFields = {
  title: sharedFields.title,
  slug: sharedFields.slug,
  description: sharedFields.description,
  sort: sharedFields.sort,
};

export default fields;
