import { TSelectOptions } from 'components/Form/components/FormInput/components/Select';
import sharedFields from 'config/fields';
import API from 'utils/api';

import type { TFormField, TFormFields } from 'components/Form/types';

const attachment: TFormField<string> = {
  type: 'file',
  name: 'attachment',
  label: 'Исходный документ',
  hint: 'Прикрепите к публикации исходный документ (PDF, DOC, DOCX, ZIP). Максимальный размер файла – 2МБ.',
};

const source: TFormField<string> = {
  name: 'source',
  label: 'Источник публикации',
  hint: 'Укажите URL источника публикации.',
};

const isPinned: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isPinned',
  defaultValue: false,
  label: 'Закрепить элемент?',
  hint: 'Закрепленные элементы отображаются вверху списка элементов.',
};

const tags: TFormField<string[]> = {
  type: 'select',
  name: 'tags',
  label: 'Привязка к тегам',
  hint: 'Выберите один или несколько тегов, которые будут присвоены элементу.',
  attrs: {
    isMultiple: true,
    size: 10,
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/catalog/tags?context=article'),
  },
};

const fields: TFormFields = {
  title: sharedFields.title,
  slug: sharedFields.slug,
  description: sharedFields.description,
  content: sharedFields.content,
  sort: sharedFields.sort,
  publishedAt: sharedFields.publishedAt,
  isPublished: sharedFields.isPublished,
  sites: sharedFields.sites,
  locale: sharedFields.locale,
  tags,
  attachment,
  source,
  isPinned,
};

export default fields;
