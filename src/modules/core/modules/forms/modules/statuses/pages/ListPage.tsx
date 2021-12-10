import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AxiosError, AxiosRequestConfig } from 'axios';

import { TDataForm } from '@forms/config/types';
import API from 'utils/api';
import PageView from 'views/PageView';

import StatusesList from '../views/StatusesList';

const ListPage: React.FC = () => {
  const { uuid = 'unknown' } = useParams();
  const [form, setForm] = useState<TDataForm>();
  const title = 'Контент :: Веб-формы :: Статусы';

  useEffect(() => {
    const config: AxiosRequestConfig = { url: `/forms/${uuid}` };

    API.request<TDataForm>(config)
      .then((response) => setForm(response.data))
      .catch((error: AxiosError) => error);
  }, [uuid]);

  return (
    <PageView title={title}>
      {form && (
        <>
          <h2>{`Список статусов веб-формы "${form.title}"`}</h2>
          <StatusesList />
        </>
      )}
    </PageView>
  );
};

export default ListPage;
