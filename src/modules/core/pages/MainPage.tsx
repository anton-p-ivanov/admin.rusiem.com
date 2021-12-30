import React from 'react';
import { Link } from 'react-router-dom';

import PageView from 'views/PageView';

const MainPage: React.FC = () => {
  const title = 'Добро пожаловать';

  return (
    <PageView title={title}>
      <p>
        Исходный код проекта можно найти в моем репозитории на github
        <br />
        <a href="https://github.com/anton-p-ivanov/admin.rusiem.com/tree/dev" target="_blank" rel="noreferrer">https://github.com/anton-p-ivanov/admin.rusiem.com/tree/dev</a>
      </p>
      <ul>
        <li>
          В проекте использовались технологии: React.JS, React.Router, TypeScript, SASS, ESLint
        </li>
        <li>
          Все компоненты проекта - функциональные, как рекомендует React.JS, начиная с версии 16
        </li>
        <li>Хранилище основано на связке хуков useReducer + useContext</li>
        <li>Код проекта разбит на модули (src/modules)</li>
        <li>
          Код проходит проверки линтера (подключены стандартные правила React.JS + набор
          популярных правил airbnb)
        </li>
      </ul>
      <p>
        Код API проекта (основан на Symfony) доступен на github:
        <br />
        <a href="https://github.com/anton-p-ivanov/api.rusiem.com" target="_blank" rel="noreferrer">https://github.com/anton-p-ivanov/api.rusiem.com</a>
      </p>
      <p>
        Для начала вы можете ознакомиться со списком&nbsp;
        <Link to="/content/news">Новости</Link>
        .
        <br />
        Стоит обратить внимание на функцию подтверждения удаления записей,
        их фильтрацию и сортировку
      </p>
      <p>ВНИМАНИЕ! Проект предназначен для ознакомительных целей</p>
    </PageView>
  );
};

export default MainPage;
