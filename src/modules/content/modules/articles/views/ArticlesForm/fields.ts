import sharedFields from 'config/fields';

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
  tags: sharedFields.tags,
  attachment,
  source,
  isPinned,
};

export default fields;
