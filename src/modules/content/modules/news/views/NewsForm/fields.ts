import sharedFields from 'config/fields';

import type { TFormField, TFormFields } from 'components/Form/types';

const imageSmall: TFormField<string> = {
  type: 'file',
  name: 'imageSmall',
  label: 'Изображение',
  hint: 'Изображение для списка новостей. Размер изображения не должен превышать 800x600 пикселей. Максимальный размер файла – 2МБ.',
};

const imageLarge: TFormField<string> = {
  type: 'file',
  name: 'imageLarge',
  label: 'Большое изображение',
  hint: 'Изображение для страницы детального просмотра новости. Размер изображения должен быть больше 800x600 пикселей. Максимальный размер файла – 2МБ.',
};

const isPinned: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isPinned',
  defaultValue: false,
  label: 'Закрепить новость?',
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
  imageSmall,
  imageLarge,
  isPinned,
};

export default fields;
