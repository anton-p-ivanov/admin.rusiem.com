import type { TFormField, TFormFields } from 'components/Form/types';

const code: TFormField<string> = {
  name: 'code',
  label: 'Уникальный символьный код шаблона',
  hint: 'Допускается не более 250 символов [a-z0-9-_]',
};

const sender: TFormField<string> = {
  name: 'sender',
  label: 'Отправитель',
  hint: 'Укажите E-Mail отправителя',
};

const recipient: TFormField<string> = {
  name: 'recipient',
  label: 'Получатель',
  hint: 'Укажите E-Mail получателя',
};

const attachment: TFormField<string> = {
  type: 'file',
  name: 'attachment',
  label: 'Вложение',
  hint: 'Выберите файл, который будет прикреплен к письму',
};

const extraHeaders: TFormField<string> = {
  type: 'textarea',
  name: 'extraHeaders',
  label: 'Дополнительные заголовки',
  hint: 'Дополнительные параметры письма в формате JSON',
  attrs: {
    size: 'small',
  },
};

const subject: TFormField<string> = {
  name: 'subject',
  label: 'Тема письма',
  hint: 'Допускается не более 250 символов.',
};

const html: TFormField<string> = {
  name: 'html',
  type: 'textarea',
  attrs: {
    size: 'large',
  },
};

const text: TFormField<string> = {
  name: 'text',
  type: 'textarea',
  attrs: {
    size: 'large',
  },
};

const fields: TFormFields = {
  code,
  sender,
  recipient,
  attachment,
  extraHeaders,
  subject,
  html,
  text,
};

export default fields;
