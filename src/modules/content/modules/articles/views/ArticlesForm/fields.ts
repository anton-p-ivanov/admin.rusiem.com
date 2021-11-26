import API from 'utils/api';

import type { TChoices } from 'components/Form/components/FormInput/components/Choices/types';
import type { TSelectOptions } from 'components/Form/components/FormInput/components/Select/types';
import type { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Допускается не более 250 символов.',
};

const slug: TFormField<string> = {
  name: 'slug',
  label: 'Символьный код',
  hint: 'Допускается не более 250 символов из набора [a-z0-9_]. Генерируется автоматически если значение не заполнено.',
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Аннотация',
  hint: 'Допускается обычный текст и HTML код.',
};

const content: TFormField<string> = {
  name: 'content',
  type: 'textarea',
  label: 'Основной текст',
  hint: 'Допускается обычный текст и HTML код.',
  attrs: {
    size: 'large',
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  defaultValue: 100,
  label: 'Индекс сортировки',
  hint: 'Значение определяющее положение элемента в списке элементов.',
};

const date = new Date();

const publishedAt: TFormField<string> = {
  type: 'datetime',
  name: 'publishedAt',
  defaultValue: new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000)).toISOString(),
  label: 'Дата публикации',
  hint: 'Дата, отображаемая пользователям на сайте.',
};

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

const isPublished: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isPublished',
  defaultValue: true,
  label: 'Опубликовать элемент?',
  hint: 'Только опубликованные элементы видны пользователям.',
};

const isPinned: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isPinned',
  defaultValue: false,
  label: 'Закрепить элемент?',
  hint: 'Закрепленные элементы отображаются вверху списка элементов.',
};

const sites: TFormField<string[]> = {
  type: 'choices',
  name: 'sites',
  label: 'Отображать на сайтах',
  hint: 'Выберите один или несколько сайтов, на которых элемент будет доступен.',
  attrs: {
    isMultiple: true,
    choicesCallback: (): Promise<TChoices> => API.lookup<TChoices>('/sites'),
  },
};

const locale: TFormField<string> = {
  type: 'choices',
  name: 'locale',
  defaultValue: 'ru',
  label: 'Отображать для локали',
  hint: 'Выберите локаль, для которой элемент будет отображаться на сайте.',
  attrs: {
    choicesCallback: (): Promise<TChoices> => API.lookup<TChoices>('/locales'),
  },
};

const tags: TFormField<string[]> = {
  type: 'select',
  name: 'tags',
  label: 'Привязка к тегам',
  hint: 'Выберите один или несколько тегов, которые будут присвоены новости.',
  attrs: {
    isMultiple: true,
    size: 10,
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/catalog/tags?context=news'),
  },
};

const fields: TFormFields = {
  title,
  slug,
  description,
  content,
  sort,
  publishedAt,
  attachment,
  source,
  isPublished,
  isPinned,
  sites,
  locale,
  tags,
};

export default fields;
