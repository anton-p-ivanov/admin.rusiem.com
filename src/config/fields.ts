import { TSelectOptions } from 'components/Form/components/FormInput/components/Select';
import API from 'utils/api';

import type { TChoices } from 'components/Form/components/FormInput/components/Choices/types';
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
  label: 'Индекс сортировки',
  hint: 'Значение определяющее положение элемента в списке элементов.',
};

const publishedAt: TFormField<string> = {
  type: 'datetime',
  name: 'publishedAt',
  label: 'Дата публикации',
  hint: 'Дата, отображаемая пользователям на сайте.',
};

const isPublished: TFormField<boolean> = {
  type: 'checkbox',
  name: 'isPublished',
  label: 'Опубликовать элемент?',
  hint: 'Только опубликованные элементы видны пользователям.',
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

const tags: TFormField<string[]> = {
  type: 'select',
  name: 'tags',
  label: 'Привязка к тегам',
  hint: 'Выберите один или несколько тегов, которые будут присвоены элементу.',
  attrs: {
    isMultiple: true,
    size: 10,
    optionsCallback: (): Promise<TSelectOptions> => API.lookup<TSelectOptions>('/catalog/tags?context=news'),
  },
};

const locale: TFormField<string> = {
  type: 'choices',
  name: 'locale',
  label: 'Отображать для локали',
  hint: 'Выберите локаль, для которой элемент будет отображаться на сайте.',
  attrs: {
    choicesCallback: (): Promise<TChoices> => API.lookup<TChoices>('/locales'),
  },
};

const fields: TFormFields = {
  title,
  slug,
  description,
  content,
  sort,
  publishedAt,
  isPublished,
  sites,
  locale,
  tags,
};

export default fields;
